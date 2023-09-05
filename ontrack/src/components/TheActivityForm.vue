<script setup>
import { nextTick, ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '../validators'

const emit = defineEmits({
  submit: isActivityValid
})

const activity = ref('')

async function submit() {
  emit('submit', activity.value)
  activity.value = ''
  await nextTick(() => {
    window.scroll(0, document.body.scrollHeight)
  })
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 bg-white p-4">
    <input
      type="text"
      v-model="activity"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
