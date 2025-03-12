import { describe, expect, it, test, vi } from 'vitest'
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
  test.each([
    [SECONDS_IN_MINUTE * 0, '+00:00:00'],
    [SECONDS_IN_MINUTE * 1, '+00:01:00'],
    [SECONDS_IN_MINUTE * 3, '+00:03:00'],
    [SECONDS_IN_MINUTE * 30, '+00:30:00'],
    [SECONDS_IN_HOUR, '+01:00:00'],
    [SECONDS_IN_DAY, '+00:00:00']
  ])('positive: formatSecondsWithSign(%i) -> %0', (seconds, formattedSeconds) => {
    expect(formatSecondsWithSign(seconds)).toBe(formattedSeconds)
  })

  test.each([
    [-SECONDS_IN_MINUTE * 0, '+00:00:00'],
    [-SECONDS_IN_MINUTE * 1, '-00:01:00'],
    [-SECONDS_IN_MINUTE * 3, '-00:03:00'],
    [-SECONDS_IN_MINUTE * 30, '-00:30:00'],
    [-SECONDS_IN_HOUR, '-01:00:00'],
    [-SECONDS_IN_DAY, '-00:00:00']
  ])('negative: formatSecondsWithSign(%i) -> %0', (seconds, formattedSeconds) => {
    expect(formatSecondsWithSign(seconds)).toBe(formattedSeconds)
  })
})

test.each([
  [SECONDS_IN_MINUTE * 0, '00:00:00'],
  [SECONDS_IN_MINUTE * 1, '00:01:00'],
  [SECONDS_IN_MINUTE * 3, '00:03:00'],
  [SECONDS_IN_MINUTE * 30, '00:30:00'],
  [SECONDS_IN_HOUR, '01:00:00'],
  [SECONDS_IN_DAY, '00:00:00']
])('formatSeconds(%i) -> %0', (seconds, formattedSeconds) => {
  expect(formatSeconds(seconds)).toBe(formattedSeconds)
})

test.each([
  ['random-string', 'random-string'],
  [null, null],
  ['1', 1]
])('normalizeSelectValue(%o) -> %o', (value, normalizedValue) => {
  expect(normalizeSelectValue(value)).toBe(normalizedValue)
})

test.each([
  [0, ProgressColorClass.RED],
  [LOW_PERCENT - 1, ProgressColorClass.RED],
  [MEDIUM_PERCENT - 1, ProgressColorClass.YELLOW],
  [HUNDRED_PERCENT - 1, ProgressColorClass.BLUE],
  [HUNDRED_PERCENT, ProgressColorClass.GREEN]
])('getProgressColorClass(%i) -> %o', (percentage, progressColorClass) => {
  expect(getProgressColorClass(percentage)).toBe(progressColorClass)
})

it('generates id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)
  expect(id()).toBe('1s')
})
