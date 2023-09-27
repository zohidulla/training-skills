<script setup>
import { NAV_ITEMS } from '../constants'
import TheNavItem from './TheNavItem.vue'
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <TheNavItem v-for="navItem in NAV_ITEMS" :key="navItem.page" :nav-item="navItem" />
    </ul>
  </nav>
</template>
