<script setup lang="ts">
</script>

<template lang="pug">
div
  Html(lang="en")
  AppHeader
  slot
  AppFooter
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 dark:bg-primary-900;
}
</style>
