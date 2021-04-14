import { addDays, setDay, startOfWeek, format, setMonth } from 'date-fns'
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

export function buildMonths() {
  const months = new Array(12)
                  .fill(0)
                  .map((_, i) => setMonth(new Date(0), i))
                  .map((month, j) => ({index: j, name: format(month, 'MMMM')}))
  return chunk(months, 3)
}

export function buildYears(middle, windowSize = 3) {
  const start = middle - windowSize
  const end = middle + windowSize
  const years = []
  for(let i = start; i <= end; i++) {
    years.push(i)
  }
  return years;
}