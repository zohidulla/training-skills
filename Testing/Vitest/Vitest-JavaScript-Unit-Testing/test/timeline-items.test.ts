import { expect, it } from 'vitest'
import { TimelineItem } from '../src/types'
import { updateTimelineItem } from '../src/timeline-items'

it.only('updates the timeline item', () => {
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
it.todo('resets the timeline item activities')
it.todo('calculates the tracked activity seconds')
