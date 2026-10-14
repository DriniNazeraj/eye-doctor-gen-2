export type HoursRow = {
  day: string
  short: string
  schemaDay: string
  open: string | null
  close: string | null
}

export const hours: HoursRow[] = [
  { day: "Monday", short: "Mon", schemaDay: "Monday", open: "08:30", close: "19:00" },
  { day: "Tuesday", short: "Tue", schemaDay: "Tuesday", open: "08:30", close: "19:00" },
  { day: "Wednesday", short: "Wed", schemaDay: "Wednesday", open: "08:30", close: "19:00" },
  { day: "Thursday", short: "Thu", schemaDay: "Thursday", open: "08:30", close: "19:00" },
  { day: "Friday", short: "Fri", schemaDay: "Friday", open: "08:30", close: "19:00" },
  { day: "Saturday", short: "Sat", schemaDay: "Saturday", open: "09:00", close: "15:00" },
  { day: "Sunday", short: "Sun", schemaDay: "Sunday", open: null, close: null },
]

export const hoursSummary = "Mon–Fri 08:30–19:00, Sat 09:00–15:00, Sun closed"

export function formatHoursRange(row: HoursRow) {
  if (!row.open || !row.close) return "Closed"
  return `${row.open}–${row.close}`
}
