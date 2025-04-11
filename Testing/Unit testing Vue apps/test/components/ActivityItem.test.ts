import { expect, it, vi } from 'vitest'
import ActivityItem from '../../src/components/ActivityItem.vue'
import { mount } from '@vue/test-utils'
import BaseButton from '../../src/components/BaseButton.vue'
import { Activity, ButtonType, IconName } from '../../src/types'
import BaseIcon from '../../src/components/BaseIcon.vue'
import * as timelineItems from '../../src/timeline-items'
import * as activities from '../../src/activities'
import BaseSelect from '../../src/components/BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS, SECONDS_IN_HOUR } from '../../src/constants'

function mountActivityItem(activityOverrides: Partial<Activity> = {}) {
  return mount(ActivityItem, {
    props: {
      activity: createActivity(activityOverrides)
    }
  })
}

function createActivity(overrides: Partial<Activity> = {}) {
  return {
    id: '',
    name: '',
    secondsToComplete: 0,
    ...overrides
  }
}

it('has delete button', () => {
  const wrapper = mountActivityItem()

  expect(wrapper.findComponent(BaseButton).props('type')).toBe(ButtonType.DANGER)
  expect(wrapper.findComponent(BaseIcon).props('name')).toBe(IconName.TRASH)
})

it('deletes activity', () => {
  const resetTimelineItemActivitiesSpy = vi.spyOn(timelineItems, 'resetTimelineItemActivities')
  const deleteActivitySpy = vi.spyOn(activities, 'deleteActivity')
  const activity = createActivity()
  const wrapper = mountActivityItem(activity)

  wrapper.find('button').trigger('click')

  expect(resetTimelineItemActivitiesSpy).toBeCalledTimes(1)
  expect(resetTimelineItemActivitiesSpy).toBeCalledWith(timelineItems.timelineItems.value, activity)
  expect(deleteActivitySpy).toBeCalledTimes(1)
  expect(deleteActivitySpy).toBeCalledWith(activity)
  vi.resetAllMocks()
})

it('shows activity nam', () => {
  const name = 'Reading'

  expect(mountActivityItem({ name }).text()).toContain(name)
})

it('has period select', () => {
  const secondsToComplete = SECONDS_IN_HOUR * 1
  const wrapper = mountActivityItem({ secondsToComplete })

  expect(wrapper.findComponent(BaseSelect as any).props()).toEqual({
    placeholder: 'hh:mm',
    options: PERIOD_SELECT_OPTIONS,
    selected: secondsToComplete
  })
})
