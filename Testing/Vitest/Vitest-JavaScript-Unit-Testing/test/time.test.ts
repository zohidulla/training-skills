import { expect, it, vi } from 'vitest'
import { endOfHour, isToday, today, tomorrow, toSeconds } from '../src/time'
import { MILLISECONDS_IN_SECOND } from '../src/constants'

it.each([
  [new Date('2025-01-01'), new Date('2025-01-01')],
  [new Date('2025-01-02'), new Date('2025-01-02')],
  [new Date('2025-01-03'), new Date('2025-01-03')]
])('return current date: %o', (date, expectedDate) => {
  vi.setSystemTime(date)
  expect(today()).toEqual(expectedDate)
  vi.useRealTimers()
})

it.each([
  [new Date('2025-01-01'), new Date('2025-01-01')],
  [new Date('2025-01-02'), new Date('2025-01-02')],
  [new Date('2025-01-03'), new Date('2025-01-03')]
])('returns date of tomorrow: %o', (date, expectedDate) => {
  vi.setSystemTime(date)
  expect(tomorrow()).toEqual(expectedDate)
  vi.useRealTimers()
})

it.each([
  [new Date('2025-01-01T12:00:00'), new Date('2025-01-01T12:59:59')],
  [new Date('2025-01-01T12:00:00'), new Date('2025-01-01T12:59:59')],
  [new Date('2025-01-01T12:00:00'), new Date('2025-01-01T12:59:59')]
])('endOfHour(%o) -> %o', (date, expectedDate) => {
  expect(endOfHour(date)).toEqual(expectedDate)
})

it('checks if passed date is today', () => {
  const date = new Date('2025-01-01')
  vi.setSystemTime(date)
  expect(isToday(date)).toBe(false)
  vi.useRealTimers()
})

it.each([
  [MILLISECONDS_IN_SECOND * 0, 0],
  [MILLISECONDS_IN_SECOND * 1, 1],
  [MILLISECONDS_IN_SECOND * 10, 10],
  [-MILLISECONDS_IN_SECOND * 0, 0],
  [-MILLISECONDS_IN_SECOND * 1, -1],
  [-MILLISECONDS_IN_SECOND * 10, -10]
])('toSeconds(%i) -> %i', (milliseconds, seconds) => {
  expect(toSeconds(milliseconds)).toBe(seconds)
})
