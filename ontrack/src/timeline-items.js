import { ref } from 'vue'
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants'
import { currentHour } from './functions'

export const timelineItemRefs = ref([])

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(timelineItems, activity) {
  filterTimelineItemsByActivity(timelineItems, activity).forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds: timelineItem.hour === currentHour() ? timelineItem.activitySeconds : 0
    })
  )
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0)
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(currentHour(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function filterTimelineItemsByActivity(timelineItems, { id }) {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null, // [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: 0 //  [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  }))
}
