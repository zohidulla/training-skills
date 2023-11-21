import { createApp } from 'vue'
import { loadState, saveState } from './storage'
import { startTimelineItemTimer, activeTimelineItem } from './timeline-items'
import App from './App.vue'

import './assets/main.css'

loadState()

if (activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value)
}

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'visible' ? loadState() : saveState()
)

createApp(App).mount('#app')
