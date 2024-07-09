<template >
button.inline-block.w-6(aria-label="Color Mode", @click="onClick")
	ColorScheme
		UIcon.w-6.h-6(
			v-if="colorMode.preference === 'dark'",
			name="heroicons:moon"
			class="dark:text-gray-300"
			dynamic
		)
		UIcon.w-6.h-6.text-gray-900(
			v-else,
			name="heroicons:sun"
			dynamic
		)
</template>

<script setup lang="ts">

const colorMode = useColorMode()
const onClick = () => {
	const values = ['light', 'dark']
	const index = values.indexOf(colorMode.value)
	const next = (index + 1) % values.length

	colorMode.preference = values[next]!
}
</script>
