import { beforeEach, describe, expect, it, test } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { Activity } from '../src/types'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from '../src/constants'

let activity: Activity

beforeEach(() => {
  activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1
  }
})

describe('updateActivity', () => {
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_HOUR * 2
  }

  it('updates original activity', () => {
    updateActivity(activity, updatedFields)

    expect(activity).toEqual(updatedFields)
  })

  it('returns updated activity', () => {
    expect(updateActivity(activity, updatedFields)).toEqual(updatedFields)
  })

  // it('calculates activity completion percentage', () => {
  //   expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0)).toBe(0)
  //   expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0.5)).toBe(50)
  //   expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 1)).toBe(
  //     HUNDRED_PERCENT
  //   )
  // })
})

test.each([
  [SECONDS_IN_HOUR * 0, 0],
  [SECONDS_IN_HOUR * 0.5, 50],
  [SECONDS_IN_HOUR * 1, HUNDRED_PERCENT]
])('calculateActivityCompletionPercentage(%i) -> %i', (trackedSeconds, percentage) => {
  expect(calculateActivityCompletionPercentage(activity, trackedSeconds)).toBe(percentage)
})

test.each([
  { trackedSeconds: SECONDS_IN_HOUR * 0, percentage: 0 },
  { trackedSeconds: SECONDS_IN_HOUR * 0.5, percentage: 50 },
  { trackedSeconds: SECONDS_IN_HOUR * 1, percentage: HUNDRED_PERCENT }
])(
  'calculateActivityCompletionPercentage($trackedSeconds) -> $percentage',
  ({ trackedSeconds, percentage }) => {
    expect(calculateActivityCompletionPercentage(activity, trackedSeconds)).toBe(percentage)
  }
)

test.each`
  trackedSeconds           | percentage
  ${SECONDS_IN_HOUR * 0}   | ${0}
  ${SECONDS_IN_HOUR * 0.5} | ${50}
  ${SECONDS_IN_HOUR * 1}   | ${HUNDRED_PERCENT}
`(
  'calculateActivityCompletionPercentage($trackedSeconds) -> $percentage',
  ({ trackedSeconds, percentage }) => {
    expect(calculateActivityCompletionPercentage(activity, trackedSeconds)).toBe(percentage)
  }
)
