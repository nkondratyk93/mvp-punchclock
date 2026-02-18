export interface TimeEntry {
  id: string;
  clockIn: string; // ISO string
  clockOut: string | null;
  note: string;
}

const STORAGE_KEY = "punchclock_entries";

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

export function saveEntries(entries: TimeEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function formatHours(ms: number): string {
  return (ms / 3600000).toFixed(1);
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

export function getEntryDuration(entry: TimeEntry): number {
  const start = new Date(entry.clockIn).getTime();
  const end = entry.clockOut
    ? new Date(entry.clockOut).getTime()
    : Date.now();
  return end - start;
}

export function getTodayEntries(entries: TimeEntry[]): TimeEntry[] {
  const today = new Date().toDateString();
  return entries.filter(
    (e) => new Date(e.clockIn).toDateString() === today
  );
}

export function getWeekEntries(entries: TimeEntry[]): TimeEntry[] {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
  monday.setHours(0, 0, 0, 0);
  return entries.filter((e) => new Date(e.clockIn) >= monday);
}

export function getWeekDaySummary(
  entries: TimeEntry[]
): { day: string; hours: number }[] {
  const weekEntries = getWeekEntries(entries);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
  monday.setHours(0, 0, 0, 0);

  return days.map((day, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const dateStr = date.toDateString();
    const dayEntries = weekEntries.filter(
      (e) => new Date(e.clockIn).toDateString() === dateStr
    );
    const totalMs = dayEntries.reduce(
      (sum, e) => sum + getEntryDuration(e),
      0
    );
    return { day, hours: totalMs / 3600000 };
  });
}

export function exportToCSV(entries: TimeEntry[]): string {
  const header = "Date,Clock In,Clock Out,Duration (hours),Note";
  const rows = entries.map((e) => {
    const date = formatDate(e.clockIn);
    const clockIn = formatTime(e.clockIn);
    const clockOut = e.clockOut ? formatTime(e.clockOut) : "In progress";
    const duration = formatHours(getEntryDuration(e));
    const note = `"${(e.note || "").replace(/"/g, '""')}"`;
    return `${date},${clockIn},${clockOut},${duration},${note}`;
  });
  return [header, ...rows].join("\n");
}

export function downloadCSV(entries: TimeEntry[]) {
  const csv = exportToCSV(entries);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `punchclock-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
