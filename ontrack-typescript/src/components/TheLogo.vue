<script setup>
import { PAGE_TIMELINE } from '../constants'
import { ICON_CLOCK } from '../icons'
import { currentPage, navigate } from '../router'
import { scrollToCurrentHour } from '../timeline-items'
import BaseIcon from './BaseIcon.vue'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>
<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    @click="handleClick"
    class="origin-left scale-125 rounded bg-black p-1 text-white"
  >
    <BaseIcon :name="ICON_CLOCK" class="h-5" />
  </a>
</template>
