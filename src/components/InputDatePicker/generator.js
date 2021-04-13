import { addDays, setDay, startOfWeek, format } from 'date-fns'
import chunk from 'lodash/chunk'

export function buildWeeks(year, monthIndex) {
  const firstDayOfMonth = new Date(year, monthIndex)
  const firstDayOfCalendar = startOfWeek(firstDayOfMonth, {weekStartsOn: 0})
  const weeks = new Array(6 * 7)
                      .fill(0)
                      .map((_, i) => addDays(firstDayOfCalendar, i))
  return chunk(weeks, 7)
}

export function buildDayNames(weekStartOn) {
  return new Array(7)
          .fill(0)
          .map((_, i) => (i + weekStartOn) % 7)
          .map(dayOfWeek => {
            const day = setDay(new Date(0), dayOfWeek)
            return format(day, 'EEEEEE')
          })
}