<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () =>
    colorMode.value === 'light'
        ? (colorMode.preference = 'dark')
        : (colorMode.preference = 'light')
</script>

<template lang="pug">
button.inline-block.w-5(aria-label="Color Mode", @click="onClick")
    ColorScheme(placeholder="🗘")
        Icon(
            v-if="colorMode.value === 'dark'",
            name="heroicons-outline:moon",
            size="24"
        )
        Icon(v-else, name="heroicons-outline:sun", size="24")
</template>
