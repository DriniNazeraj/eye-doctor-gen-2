import { formatHoursRange, hours, type HoursRow } from "../../data/hours.ts"

export function HoursList({ rows = hours, compact = false }: { rows?: HoursRow[]; compact?: boolean }) {
  return (
    <dl className="space-y-2 text-sm">
      {rows.map((row) => (
        <div key={row.day} className="flex justify-between gap-6">
          <dt className="text-muted">{compact ? row.short : row.day}</dt>
          <dd className="font-medium text-navy">{formatHoursRange(row)}</dd>
        </div>
      ))}
    </dl>
  )
}
