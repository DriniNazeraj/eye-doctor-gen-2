import { DayPicker, type Matcher } from "react-day-picker"
import { enGB } from "date-fns/locale"

import "react-day-picker/style.css"

export function Calendar({
  selected,
  onSelect,
  disabled,
}: {
  selected?: Date
  onSelect: (date: Date | undefined) => void
  disabled?: Matcher | Matcher[]
}) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={disabled}
      locale={enGB}
      weekStartsOn={1}
      showOutsideDays
      startMonth={new Date()}
      endMonth={new Date(new Date().getFullYear(), new Date().getMonth() + 4, 1)}
      className="rdp-root"
    />
  )
}
