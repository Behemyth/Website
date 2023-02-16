<template lang="pug">
nav.bg-white.p-4.rounded.max-w-4xl.mx-auto(
	class="sm:px-2 dark:bg-gray-700"
)
	.flex.items-center.justify-between.mx-auto
		NuxtLink.flex.items-center(to="/")
			img.h-6.mr-3.rounded-full(
				src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200",
				class="sm:h-9",
				alt="Asher's Face"
			)
			span.self-center.text-xl.font-semibold.whitespace-nowrap(
				class="dark:text-white"
			) Home
		NavList(:list="navigation? navigation: []")
		NavSearch(:list="search? search: []")
		ColorModeSwitch(
			class="hover:text-gray-700 dark:hover:text-gray-300"
		)
</template>

<script setup lang="ts">
const { data: navigation } = useLazyAsyncData('navigation', () => fetchContentNavigation().then(navigation => navigation.slice(1)))
const { data: search } = useLazyAsyncData('search', () => fetchContentNavigation().then(navigation => navigation.slice(1, -1)))

</script>
