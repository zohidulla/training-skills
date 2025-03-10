import { describe, expect, it, vi } from 'vitest'
import {
  formatSeconds,
  formatSecondsWithSign,
  getProgressColorClass,
  id,
  normalizeSelectValue
} from '../src/functions'
import { ProgressColorClass } from '../src/types'
import {
  HUNDRED_PERCENT,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE
} from '../src/constants'

describe('formatSecondsWithSign', () => {
  it('formats positive amount of seconds', () => {
    expect(formatSecondsWithSign(SECONDS_IN_MINUTE * 0)).toBe('+00:00:00')
    expect(formatSecondsWithSign(SECONDS_IN_MINUTE * 1)).toBe('+00:01:00')
    expect(formatSecondsWithSign(SECONDS_IN_MINUTE * 3)).toBe('+00:03:00')
    expect(formatSecondsWithSign(SECONDS_IN_MINUTE * 30)).toBe('+00:30:00')
    expect(formatSecondsWithSign(SECONDS_IN_HOUR)).toBe('+01:00:00')
    expect(formatSecondsWithSign(SECONDS_IN_DAY)).toBe('+00:00:00')
  })

  it('formats negative amount of seconds', () => {
    expect(formatSecondsWithSign(-SECONDS_IN_MINUTE * 0)).toBe('+00:00:00')
    expect(formatSecondsWithSign(-SECONDS_IN_MINUTE * 1)).toBe('-00:01:00')
    expect(formatSecondsWithSign(-SECONDS_IN_MINUTE * 3)).toBe('-00:03:00')
    expect(formatSecondsWithSign(-SECONDS_IN_MINUTE * 30)).toBe('-00:30:00')
    expect(formatSecondsWithSign(-SECONDS_IN_HOUR)).toBe('-01:00:00')
    expect(formatSecondsWithSign(-SECONDS_IN_DAY)).toBe('-00:00:00')
  })
})

it('formats seconds', () => {
  expect(formatSeconds(SECONDS_IN_MINUTE * 0)).toBe('00:00:00')
  expect(formatSeconds(SECONDS_IN_MINUTE * 1)).toBe('00:01:00')
  expect(formatSeconds(SECONDS_IN_MINUTE * 3)).toBe('00:03:00')
  expect(formatSeconds(SECONDS_IN_MINUTE * 30)).toBe('00:30:00')
  expect(formatSeconds(SECONDS_IN_HOUR)).toBe('01:00:00')
  expect(formatSeconds(SECONDS_IN_DAY)).toBe('00:00:00')
})

it('normalizes select value', () => {
  expect(normalizeSelectValue('random-string')).toBe('random-string')
  expect(normalizeSelectValue(null)).toBe(null)
  expect(normalizeSelectValue('1')).toBe(1)
})

it('gets progress color class', () => {
  expect(getProgressColorClass(0)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(LOW_PERCENT - 1)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(MEDIUM_PERCENT - 1)).toBe(ProgressColorClass.YELLOW)
  expect(getProgressColorClass(HUNDRED_PERCENT - 1)).toBe(ProgressColorClass.BLUE)
  expect(getProgressColorClass(HUNDRED_PERCENT)).toBe(ProgressColorClass.GREEN)
})

it('generates id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)
  expect(id()).toBe('1s')
})
