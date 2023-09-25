<script setup>
import { NAV_ITEMS } from '../constants'
import { navigate, currentPage } from '../router'
import TheNavItem from './TheNavItem.vue'
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <TheNavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="navigate(page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </TheNavItem>
    </ul>
  </nav>
</template>
