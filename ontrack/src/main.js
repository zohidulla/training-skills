import { createApp } from 'vue'
import App from './App.vue'
import * as storage from './storage'
import { timelineItems } from './timeline-items'
import { activities } from './activities'

import './assets/main.css'

document.addEventListener('visibilitychange', () => {
  if (document.visibilitychange === 'hidden') {
    saveState()
  }
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value
  })
}

createApp(App).mount('#app')
