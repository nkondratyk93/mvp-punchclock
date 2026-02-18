"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import {
  getEntries,
  getActiveEntry,
  clockIn,
  clockOut,
  updateEntry,
  formatDuration,
  formatTime,
  getTodayEntries,
  getWeekEntries,
  getDailyTotals,
  downloadCSV,
  trackEvent,
  type TimeEntry,
} from "@/lib/punchclock";

export default function AppPage() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [active, setActive] = useState<TimeEntry | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editEndTime, setEditEndTime] = useState("");
  const [editNote, setEditNote] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackVote, setFeedbackVote] = useState<"yes" | "no" | null>(null);
  const [feedbackText, setFeedbackText] = useState("");

  const refresh = useCallback(() => {
    const all = getEntries();
    setEntries(all);
    setActive(getActiveEntry());
  }, []);

  useEffect(() => {
    refresh();
    const stored = localStorage.getItem("feedback_punchclock");
    if (stored) setFeedbackSent(true);
  }, [refresh]);

  // Live timer
  useEffect(() => {
    if (!active) {
      setElapsed(0);
      return;
    }
    const tick = () => {
      setElapsed(Date.now() - new Date(active.start).getTime());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [active]);

  const handlePunch = () => {
    if (active) {
      clockOut(note);
      setNote("");
      trackEvent("clock_out");
    } else {
      clockIn();
      trackEvent("clock_in");
    }
    refresh();
  };

  const handleExport = () => {
    downloadCSV(entries);
    trackEvent("csv_exported");
  };

  const startEdit = (entry: TimeEntry) => {
    setEditingId(entry.id);
    if (entry.end) {
      const d = new Date(entry.end);
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setEditEndTime(`${hh}:${mm}`);
    } else {
      setEditEndTime("");
    }
    setEditNote(entry.note);
  };

  const saveEdit = (entry: TimeEntry) => {
    const updates: Partial<Pick<TimeEntry, "end" | "note">> = {
      note: editNote,
    };
    if (editEndTime) {
      const startDate = new Date(entry.start);
      const [h, m] = editEndTime.split(":").map(Number);
      const endDate = new Date(startDate);
      endDate.setHours(h, m, 0, 0);
      if (endDate < startDate) endDate.setDate(endDate.getDate() + 1);
      updates.end = endDate.toISOString();
    }
    updateEntry(entry.id, updates);
    setEditingId(null);
    refresh();
  };

  const todayEntries = getTodayEntries(entries);
  const weekEntries = getWeekEntries(entries);
  const dailyTotals = getDailyTotals(weekEntries);
  const maxDayMs = Math.max(...dailyTotals.map((d) => d.ms), 1);

  const todayTotal = todayEntries.reduce((sum, e) => {
    const end = e.end ? new Date(e.end).getTime() : Date.now();
    return sum + (end - new Date(e.start).getTime());
  }, 0);

  const weekTotal = weekEntries.reduce((sum, e) => {
    const end = e.end ? new Date(e.end).getTime() : Date.now();
    return sum + (end - new Date(e.start).getTime());
  }, 0);

  const submitFeedback = () => {
    const data = { vote: feedbackVote, text: feedbackText, date: new Date().toISOString() };
    localStorage.setItem("feedback_punchclock", JSON.stringify(data));
    setFeedbackSent(true);
    trackEvent("feedback_submitted", feedbackVote || undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold">
            PunchClock
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Button variant="outline" size="sm" onClick={handleExport}>
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Giant punch button */}
        <section className="flex flex-col items-center gap-6">
          <button
            onClick={handlePunch}
            className={`flex h-[140px] w-[140px] items-center justify-center rounded-full text-xl font-bold transition-all ${
              active
                ? "bg-punch-red text-white animate-pulse-ring"
                : "bg-punch-green text-black hover:brightness-110"
            }`}
          >
            {active ? "Clock Out" : "Clock In"}
          </button>

          {/* Live timer */}
          <div className="font-mono text-4xl tabular-nums tracking-wider">
            {active ? formatDuration(elapsed) : "00:00:00"}
          </div>

          {/* Note input when clocked in */}
          {active && (
            <Input
              placeholder="Add a note (optional)..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="max-w-sm border-zinc-800 bg-zinc-900"
            />
          )}

          {/* Today summary */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>
              Today:{" "}
              <span className="font-mono text-foreground">
                {formatDuration(todayTotal)}
              </span>
            </span>
            <span>
              This week:{" "}
              <span className="font-mono text-foreground">
                {formatDuration(weekTotal)}
              </span>
            </span>
          </div>
        </section>

        {/* Today's entries */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">Today&apos;s Entries</h2>
          {todayEntries.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No entries yet today. Hit the button to start tracking.
            </p>
          ) : (
            <div className="space-y-2">
              {[...todayEntries].reverse().map((entry) => (
                <div
                  key={entry.id}
                  className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm"
                >
                  <span className="font-mono">
                    {formatTime(entry.start)}
                  </span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className="font-mono">
                    {entry.end ? formatTime(entry.end) : "..."}
                  </span>
                  <span className="font-mono text-punch-green">
                    {entry.end
                      ? formatDuration(
                          new Date(entry.end).getTime() -
                            new Date(entry.start).getTime()
                        )
                      : formatDuration(elapsed)}
                  </span>
                  {entry.note && (
                    <span className="text-muted-foreground truncate max-w-[200px]">
                      {entry.note}
                    </span>
                  )}
                  <button
                    onClick={() =>
                      editingId === entry.id
                        ? setEditingId(null)
                        : startEdit(entry)
                    }
                    className="ml-auto text-xs text-muted-foreground hover:text-foreground"
                  >
                    {editingId === entry.id ? "Cancel" : "Edit"}
                  </button>

                  {editingId === entry.id && (
                    <div className="flex w-full flex-wrap items-end gap-3 pt-2">
                      <div>
                        <label className="mb-1 block text-xs text-muted-foreground">
                          End time
                        </label>
                        <Input
                          type="time"
                          value={editEndTime}
                          onChange={(e) => setEditEndTime(e.target.value)}
                          className="w-32 border-zinc-700 bg-zinc-800"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="mb-1 block text-xs text-muted-foreground">
                          Note
                        </label>
                        <Input
                          value={editNote}
                          onChange={(e) => setEditNote(e.target.value)}
                          className="border-zinc-700 bg-zinc-800"
                          placeholder="Note..."
                        />
                      </div>
                      <Button size="sm" onClick={() => saveEdit(entry)}>
                        Save
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Weekly summary */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">This Week</h2>
          <div className="space-y-2">
            {dailyTotals.map(({ day, ms }) => (
              <div key={day} className="flex items-center gap-3 text-sm">
                <span className="w-10 text-muted-foreground">{day}</span>
                <div className="h-4 flex-1 rounded-sm bg-zinc-900">
                  <div
                    className="h-full rounded-sm bg-punch-green transition-all"
                    style={{
                      width: ms > 0 ? `${Math.max((ms / maxDayMs) * 100, 2)}%` : "0%",
                    }}
                  />
                </div>
                <span className="w-20 text-right font-mono text-xs">
                  {ms > 0 ? formatDuration(ms) : "--:--:--"}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback */}
        <section className="mt-16 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          {feedbackSent ? (
            <p className="text-center text-sm text-muted-foreground">
              Thanks for your feedback!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium">Was this tool helpful?</p>
              <div className="flex gap-3">
                <Button
                  variant={feedbackVote === "yes" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFeedbackVote("yes")}
                >
                  Yes
                </Button>
                <Button
                  variant={feedbackVote === "no" ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setFeedbackVote("no")}
                >
                  No
                </Button>
              </div>
              {feedbackVote && (
                <>
                  <Textarea
                    placeholder="Any feedback? (optional)"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="border-zinc-700 bg-zinc-800"
                    rows={3}
                  />
                  <Button size="sm" className="self-start" onClick={submitFeedback}>
                    Submit
                  </Button>
                </>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
