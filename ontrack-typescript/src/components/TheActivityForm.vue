<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { id } from '../functions'
import { createActivity } from '../activities'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { IconName } from '../types'

const name = ref('')

async function submit(): Promise<void> {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''
  await nextTick(() => {
    window.scroll(0, document.body.scrollHeight)
  })
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 bg-white p-4">
    <input
      type="text"
      v-model="name"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <BaseIcon :name="IconName.PLUS" />
    </BaseButton>
  </form>
</template>
