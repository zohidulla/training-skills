import { expect, it, vi } from 'vitest'
import { today, tomorrow } from '../src/time'

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
it.todo('gets end of hour date')
it.todo('checks if passed date is today')
it.todo('converts milliseconds to seconds')
