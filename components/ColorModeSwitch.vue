<template lang="pug">
button(aria-label="Color Mode", @click="onClick")
	ColorScheme
		Moon(
			v-if="colorMode.preference === 'dark'",
			size="24",
			class="dark:text-gray-300"
		)
		Sun.text-gray-900(
			v-else,
			size="24"
		)
</template>

<script setup lang="ts">

import Moon from '~icons/heroicons/moon'
import Sun from '~icons/heroicons/sun'

const colorMode = useColorMode()
const onClick = () => {
	const values = ['light', 'dark']
	const index = values.indexOf(colorMode.value)
	const next = (index + 1) % values.length

	colorMode.preference = values[next]
}
</script>
