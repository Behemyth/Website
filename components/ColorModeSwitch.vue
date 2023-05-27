<template lang="pug">
button(aria-label="Color Mode", @click="onClick")
	// ColorScheme instead of ClientOnly
	ClientOnly
		Icon(
			v-if="colorMode.preference === 'dark'",
			name="heroicons-outline:moon",
			size="24"
		)
		Icon(
			v-else,
			name="heroicons-outline:sun",
			size="24"
		)
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
	const values = ['light', 'dark']
	const index = values.indexOf(colorMode.value)
	const next = (index + 1) % values.length

	colorMode.preference = values[next]
}
</script>
