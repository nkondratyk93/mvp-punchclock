export interface TimeEntry {
  id: string;
  start: string; // ISO string
  end: string | null; // ISO string or null if clocked in
  note: string;
}

const STORAGE_KEY = "punchclock-data";

export function getEntries(): TimeEntry[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveEntries(entries: TimeEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function clockIn(): TimeEntry {
  const entries = getEntries();
  const entry: TimeEntry = {
    id: crypto.randomUUID(),
    start: new Date().toISOString(),
    end: null,
    note: "",
  };
  entries.push(entry);
  saveEntries(entries);
  return entry;
}

export function clockOut(note: string = ""): TimeEntry | null {
  const entries = getEntries();
  const active = entries.find((e) => e.end === null);
  if (!active) return null;
  active.end = new Date().toISOString();
  active.note = note;
  saveEntries(entries);
  return active;
}

export function getActiveEntry(): TimeEntry | null {
  return getEntries().find((e) => e.end === null) || null;
}

export function updateEntry(
  id: string,
  updates: Partial<Pick<TimeEntry, "end" | "note">>
): void {
  const entries = getEntries();
  const entry = entries.find((e) => e.id === id);
  if (!entry) return;
  if (updates.end !== undefined) entry.end = updates.end;
  if (updates.note !== undefined) entry.note = updates.note;
  saveEntries(entries);
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function getTodayEntries(entries: TimeEntry[]): TimeEntry[] {
  const today = new Date().toDateString();
  return entries.filter((e) => new Date(e.start).toDateString() === today);
}

export function getWeekEntries(entries: TimeEntry[]): TimeEntry[] {
  const now = new Date();
  const day = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((day + 6) % 7));
  monday.setHours(0, 0, 0, 0);
  return entries.filter((e) => new Date(e.start) >= monday);
}

export function getDailyTotals(
  entries: TimeEntry[]
): { day: string; ms: number }[] {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const now = new Date();
  const currentDay = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((currentDay + 6) % 7));
  monday.setHours(0, 0, 0, 0);

  return days.map((day, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const dateStr = date.toDateString();
    const dayEntries = entries.filter(
      (e) => new Date(e.start).toDateString() === dateStr
    );
    const ms = dayEntries.reduce((sum, e) => {
      const end = e.end ? new Date(e.end).getTime() : Date.now();
      return sum + (end - new Date(e.start).getTime());
    }, 0);
    return { day, ms };
  });
}

export function entriesToCSV(entries: TimeEntry[]): string {
  const header = "Date,Start,End,Duration (hours),Note";
  const rows = entries
    .filter((e) => e.end)
    .map((e) => {
      const start = new Date(e.start);
      const end = new Date(e.end!);
      const hours = ((end.getTime() - start.getTime()) / 3600000).toFixed(2);
      const date = start.toLocaleDateString();
      const startTime = start.toLocaleTimeString();
      const endTime = end.toLocaleTimeString();
      const note = `"${e.note.replace(/"/g, '""')}"`;
      return `${date},${startTime},${endTime},${hours},${note}`;
    });
  return [header, ...rows].join("\n");
}

export function downloadCSV(entries: TimeEntry[]): void {
  const csv = entriesToCSV(entries);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `punchclock-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function trackEvent(action: string, label?: string): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: label,
    });
  }
}
