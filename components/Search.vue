<template lang="pug">
.flex
	label(
		for="search-dropdown"
		class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
	)
	button(
		id="dropdown-button"
		data-dropdown-toggle="dropdown"
		class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
		type="button"
	) All categories
		Icon.w-5.h-5(
			name="fa6-solid:magnifying-glass"
			class="text-gray-500"
		)

	div(id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700")
		ul(class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button")
		li
			button(
				type="button"
				class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
			) Test Category
	.relative.w-full
		input(
			id="search-dropdown"
			type="search"
			class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
			placeholder="Search..."
			required
		)
		button(
			type="submit"
			class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		)
			Icon.w-5.h-5(
				name="fa6-solid:magnifying-glass"
				class="text-gray-500"
			)
			span.sr-only Search
</template>

<script setup lang="ts">
</script>
