import { expect, it, vi } from 'vitest'
import { Activity, Hour, TimelineItem } from '../src/types'
import { resetTimelineItemActivities, updateTimelineItem } from '../src/timeline-items'

it('updates the timeline item', () => {
  const timelineItem: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: 0,
    isActive: false
  }
  const updatedFields: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: 0,
    isActive: true
  }
  const updatedTimelineItem = updateTimelineItem(timelineItem, updatedFields)
  expect(timelineItem).toEqual(updatedFields)
  expect(updatedTimelineItem).toEqual(updatedFields)
})
it.only('resets the timeline item activities', () => {
  const date = new Date('2025-01-01T02:00:00')
  vi.setSystemTime(date)

  const trainingActivity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }
  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }
  const timelineItems: TimelineItem[] = [
    {
      hour: 1,
      activityId: trainingActivity.id,
      activitySeconds: 1800,
      isActive: false
    },
    {
      hour: 2,
      activityId: trainingActivity.id,
      activitySeconds: 3600,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: 3600,
      isActive: true
    }
  ]

  resetTimelineItemActivities(timelineItems, trainingActivity)

  expect(timelineItems).toEqual([
    {
      hour: 1,
      activityId: null,
      activitySeconds: 0,
      isActive: false
    },
    {
      hour: date.getHours() as Hour,
      activityId: null,
      activitySeconds: 3600,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: 3600,
      isActive: true
    }
  ])

  vi.useRealTimers()
})
it.todo('calculates the tracked activity seconds')
