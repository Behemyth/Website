<template lang="pug">
nav.bg-white.border-gray-200.p-4.rounded.max-w-4xl.mx-auto(
	class="sm:px-2 dark:bg-gray-900"
)
	.container.flex.flex-wrap.items-center.justify-between.mx-auto
		NuxtLink.flex.items-center(to="/")
			img.h-6.mr-3.rounded-full(
				src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200",
				class="sm:h-9",
				alt="Asher's Face"
			)
			span.self-center.text-xl.font-semibold.whitespace-nowrap(
				class="dark:text-white"
			) Home
		.flex(class="md:order-2")
			Search
			button.inline-flex.items-center.p-4.text-sm.text-gray-500.rounded-lg(
				data-collapse-toggle="navbar-search"
				type="button"
				class="md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-search"
				aria-expanded="false"
			)
				span.sr-only Open menu
				Icon.w-5.h-5(
					name="material-symbols:menu"
					class="text-gray-500"
				)
			.space-x-3.text-gray-500.transition.p-4
				ColorModeSwitch(
					class="hover:text-gray-700 dark:hover:text-gray-300"
				)
		.items-center.justify-between.hidden.w-full(
			id="navbar-search"
			class="md:flex md:w-auto md:order-1"
		)
			Search(
				class="md:hidden"
			)
			.flex.flex-col.p-4.border.border-gray-100.rounded-lg.bg-gray-50(
				class="md:flex-row md:space-x-4 md:items-center md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			)
				NuxtLink.block.py-4.pl-2.pr-2.text-gray-700.rounded(
					v-for="link of navigation"
					:key="link._path"
					:to="link._path"
					active-class="font-bold"
					class="md:p-0 dark:text-gray-400"
				) {{ link.navTitle || link.title }}
</template>

<script setup lang="ts">
const { data: navigation } = useLazyAsyncData('navigation', () => fetchContentNavigation().then(navigation => navigation.slice(1)))
</script>
