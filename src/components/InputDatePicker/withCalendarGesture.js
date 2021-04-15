import keycode from 'keycode'
import React, { Component } from 'react'

const FIRST = 0
const LAST = Number.POSITIVE_INFINITY

function focusOn(element) {
  if (element) {
    element.focus()
  }
}

export function focusOnCalendar(calendarRef) {
  let target = calendarRef.querySelector('td > button[aria-current]')
  if (!target) {
    target = calendarRef.querySelector('td > button[data-value]')
  }
  focusOn(target)
}

function getDay(calendarRef, indexToFocus) {
  const allItems = calendarRef.querySelectorAll('td > button[data-value]')
  const index = indexToFocus < 0 ? indexToFocus + allItems.length : indexToFocus
  return allItems[index]
}

function focusOnDay(calendarRef, indexToFocus, { goToNextMonth, goToPreviousMonth } = {}) {
  const allItems = calendarRef.querySelectorAll('td > button[data-value]')
  if (indexToFocus > allItems.length - 1) {
    goToNextMonth()
    setTimeout(() => {
      focusOn(getDay(calendarRef, indexToFocus - allItems.length))
    })
  } else if (indexToFocus < 0) {
    goToPreviousMonth()
    setTimeout(() => {
      focusOn(getDay(calendarRef, indexToFocus))
    })
  } else {
    focusOn(allItems[indexToFocus])
  }
  focusOn(allItems[indexToFocus])
}

function focusWithinCalendar(calendarRef, indexToFocus) {
  const allItems = calendarRef.querySelectorAll('td > button[data-value]')
  if (indexToFocus < 0) {
    console.log('first yes')
    focusOn(allItems[0])
  } else if (indexToFocus > allItems.length - 1) {
    console.log('last yes')
    focusOn(allItems[allItems.length - 1])
  } else {
    focusOn(allItems[indexToFocus])
  }
}

function switchMonth(calendarRef, indexToFocus, monthSwitcher) {
  monthSwitcher()
  setTimeout(() => {
    focusWithinCalendar(calendarRef, indexToFocus)
  })
}

export default function withCalendarGesture(WrappedComponent) {
  function CalendarGesture(props) {
    const { goToNextMonth, goToPreviousMonth } = props
    function onKeyDown(event, calendarRef, dayIndex) {
      switch (event.keyCode) {
        case keycode.codes.down:
          event.stopPropagation()
          focusOnDay(calendarRef, dayIndex + 7, { goToNextMonth })
          break
        case keycode.codes.up:
          event.stopPropagation()
          focusOnDay(calendarRef, dayIndex - 7, { goToPreviousMonth })
          break
        case keycode.codes.right:
          event.stopPropagation()
          focusOnDay(calendarRef, dayIndex + 1, { goToNextMonth })
          break
        case keycode.codes.left:
          event.stopPropagation()
          focusOnDay(calendarRef, dayIndex - 1, { goToPreviousMonth })
          break
        case keycode.codes['page up']:
          event.stopPropagation()
          switchMonth(calendarRef, dayIndex, goToPreviousMonth)
          break
        case keycode.codes['page down']:
          event.stopPropagation()
          switchMonth(calendarRef, dayIndex, goToNextMonth)
          break
        case keycode.codes.home:
          event.stopPropagation()
          focusWithinCalendar(calendarRef, FIRST)
          break
        case keycode.codes.end:
          event.stopPropagation()
          focusWithinCalendar(calendarRef, LAST)
          break
        default:
          break
      }
    }
    return <WrappedComponent {...props} onKeyDown={onKeyDown} />
  }
  return CalendarGesture
}
