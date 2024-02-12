<template lang="pug">
button(aria-label="Color Mode", @click="onClick")
	ColorScheme
		Icon(
			v-if="colorMode.preference === 'dark'",
			name="heroicons:moon"
			size="24"
			class="dark:text-gray-300"
		)
		Icon.text-gray-900(
			v-else,
			name="heroicons:sun"
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
