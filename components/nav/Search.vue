<template lang="pug">
.flex
	label(
		for="search-dropdown"
		class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
	)
	.relative.w-full
		input(
			id="search-dropdown"
			type="search"
			class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-gray-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
			placeholder="Search {{ list[0].name }}"
			required
		)
		button(
			type="submit"
			class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		)
			Icon.w-5.h-5(
				name="fa6-solid:magnifying-glass"
				class="text-gray-500"
			)
			span.sr-only Search
</template>

<script setup lang="ts">
const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

const list = computed(() => {
	const list = props.list
	return list
})
</script>
