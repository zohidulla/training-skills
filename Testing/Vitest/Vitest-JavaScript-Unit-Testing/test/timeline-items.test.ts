import { describe, expect, it, vi } from 'vitest'
import { Activity, Hour, TimelineItem } from '../src/types'
import {
  calculateTrackedActivitySeconds,
  resetTimelineItemActivities,
  updateTimelineItem
} from '../src/timeline-items'
import { SECONDS_IN_HOUR } from '../src/constants'

describe('updateTimelineItem', () => {
  const updatedFields: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: SECONDS_IN_HOUR * 1,
    isActive: true
  }
  it('updates original timeline item', () => {
    const timelineItem: TimelineItem = {
      hour: 1,
      activityId: '1',
      activitySeconds: SECONDS_IN_HOUR * 0,
      isActive: false
    }
    updateTimelineItem(timelineItem, updatedFields)
    expect(timelineItem).toEqual(updatedFields)
  })
  it('returns updated timeline item', () => {
    const timelineItem: TimelineItem = {
      hour: 1,
      activityId: '1',
      activitySeconds: SECONDS_IN_HOUR * 0,
      isActive: false
    }
    expect(updateTimelineItem(timelineItem, updatedFields)).toEqual(updatedFields)
  })
})

describe('timeline items', () => {
  it('resets timeline item activities', () => {
    const date = new Date('2025-01-01T02:00:00')
    vi.setSystemTime(date)

    const trainingActivity: Activity = {
      id: '1',
      name: 'Training',
      secondsToComplete: SECONDS_IN_HOUR * 1
    }
    const readingActivity: Activity = {
      id: '2',
      name: 'Reading',
      secondsToComplete: SECONDS_IN_HOUR * 2
    }
    const timelineItems: TimelineItem[] = [
      {
        hour: 1,
        activityId: trainingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 0.5,
        isActive: false
      },
      {
        hour: 2,
        activityId: trainingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: false
      },
      {
        hour: 3,
        activityId: readingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: true
      }
    ]

    resetTimelineItemActivities(timelineItems, trainingActivity)

    expect(timelineItems).toEqual([
      {
        hour: 1,
        activityId: null,
        activitySeconds: SECONDS_IN_HOUR * 0,
        isActive: false
      },
      {
        hour: date.getHours() as Hour,
        activityId: null,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: false
      },
      {
        hour: 3,
        activityId: readingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: true
      }
    ])

    vi.useRealTimers()
  })

  it('calculates the tracked activity seconds', () => {
    const trainingActivity: Activity = {
      id: '1',
      name: 'Training',
      secondsToComplete: SECONDS_IN_HOUR * 1
    }
    const readingActivity: Activity = {
      id: '2',
      name: 'Reading',
      secondsToComplete: SECONDS_IN_HOUR * 2
    }
    const timelineItems: TimelineItem[] = [
      {
        hour: 1,
        activityId: trainingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 0.5,
        isActive: false
      },
      {
        hour: 2,
        activityId: trainingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: false
      },
      {
        hour: 3,
        activityId: readingActivity.id,
        activitySeconds: SECONDS_IN_HOUR * 1,
        isActive: true
      }
    ]

    const trackedTrainingActivitySeconds = calculateTrackedActivitySeconds(
      timelineItems,
      trainingActivity
    )
    const trackedReadingActivitySeconds = calculateTrackedActivitySeconds(
      timelineItems,
      readingActivity
    )
    expect(trackedTrainingActivitySeconds).toBe(SECONDS_IN_HOUR * 1.5)
    expect(trackedReadingActivitySeconds).toBe(SECONDS_IN_HOUR * 1)
  })
})
