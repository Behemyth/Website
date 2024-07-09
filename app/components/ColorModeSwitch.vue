<template>
	<button aria-label="Color Mode" class="inline-block w-6" @click="onClick">
		<ColorScheme>
			<UIcon v-if="colorMode.preference === 'dark'" name="heroicons:moon" dynamic
				class="w-6 h-6 dark:text-gray-300" />
			<UIcon v-else, name="heroicons:sun" dynamic class="w-6 h-6 text-gray-900" />
		</ColorScheme>
	</button>
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
