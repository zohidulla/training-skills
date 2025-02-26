import { expect, it, vi } from 'vitest'
import { today } from '../src/time'

it('gets the current time', () => {
  const date = new Date('2025-01-01')
  vi.setSystemTime(date)
  expect(today()).toEqual(date)
  vi.useRealTimers()
})
it.todo('gets date of tomorrow')
it.todo('gets end of hour date')
it.todo('checks if passed date is today')
it.todo('converts milliseconds to seconds')
