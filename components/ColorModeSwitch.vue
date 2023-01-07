<template lang="pug">
button(aria-label="Color Mode", @click="onClick")
	ColorScheme
		Icon(
			v-if="colorMode.preference === 'dark'",
			name="heroicons-outline:moon",
			size="24"
		)
		Icon(
			v-else-if="colorMode.preference === 'light'",
			name="heroicons-outline:sun",
			size="24"
		)
		Icon(
			v-else,
			name="fe:desktop",
			size="24"
		)
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
	const values = ['system', 'light', 'dark']
	const index = values.indexOf(colorMode.preference)
	const next = (index + 1) % values.length

	colorMode.preference = values[next]
}
</script>
