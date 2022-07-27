<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template lang="pug">
button(aria-label="Color Mode" class="inline-block" @click="onClick")
  ColorScheme(placeholder="...")
    AppIcon(v-if="colorMode.value === 'dark'" name="heroicons-outline:moon")
    AppIcon(v-else name="heroicons-outline:sun")
</template>
