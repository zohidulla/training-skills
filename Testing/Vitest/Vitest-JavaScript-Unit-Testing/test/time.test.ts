import { expect, it, vi } from 'vitest'
import { endOfHour, isToday, today, tomorrow, toSeconds } from '../src/time'

it('gets the current time', () => {
  const date = new Date('2025-01-01')
  vi.setSystemTime(date)
  expect(today()).toEqual(date)
  vi.useRealTimers()
})
it('gets date of tomorrow', () => {
  const date = new Date('2025-01-01')
  const tomorrowDate = new Date('2025-01-02')
  vi.setSystemTime(date)
  expect(tomorrow()).toEqual(tomorrowDate)
  vi.useRealTimers()
})
it('gets end of hour date', () => {
  const date = new Date('2025-01-01T12:00:00')
  const endOfHourDate = new Date('2025-01-01T12:59:59')
  expect(endOfHour(date)).toEqual(endOfHourDate)
})
it('checks if passed date is today', () => {
  const date = new Date('2025-01-01')
  vi.setSystemTime(date)
  expect(isToday(date)).toBe(false)
  vi.useRealTimers()
})
it('converts milliseconds to seconds', () => {
  expect(toSeconds(-10000)).toBe(-10)
  expect(toSeconds(-1000)).toBe(-1)
  expect(toSeconds(0)).toBe(0)
  expect(toSeconds(1000)).toBe(1)
  expect(toSeconds(10000)).toBe(10)
})
