import {format} from "date-fns";

export function dateToStr(date) {
  return format(date, 'yyyy-MM-dd')
}