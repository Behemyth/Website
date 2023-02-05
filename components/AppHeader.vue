<template lang="pug">
nav.bg-white.border-gray-200.px-4.py-4.rounded.max-w-4xl.mx-auto(
	class="sm:px-4 dark:bg-gray-900"
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
			button.text-gray-500.rounded-lg.text-sm.p-2.mr-1(
				type="button",
				data-collapse-toggle="navbar-search",
				aria-controls="navbar-search",
				aria-expanded="false",
				class="md:hidden dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
			)
				Icon.w-5.h-5(
					name="fa6-solid:magnifying-glass"
					size="24"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
				)
				span.sr-only Search
			.relative.hidden(class="md:block")
				.absolute.inset-y-0.left-0.flex.items-center.pl-3.pointer-events-none
					Icon.text-gray-500.w-5.h-5(
						name="fa6-solid:magnifying-glass"
						size="24"
					)
					span.sr-only Search icon
				input.block.w-full.p-2.pl-10.text-sm.text-gray-900.border.border-gray-300.rounded-lg.bg-gray-50(
					id="search-navbar"
					type="text"
					class="focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
				)
			button.inline-flex.items-center.p-2.text-sm.text-gray-500.rounded-lg(
				data-collapse-toggle="navbar-search"
				type="button"
				class="md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-search"
				aria-expanded="false"
			)
				span.sr-only Open menu
				Icon.w-5.h-5(
					name="material-symbols:menu"
					size="24"
					class="text-gray-500"
				)
			.space-x-3.text-gray-500.transition.p-2
				ColorModeSwitch(
					class="hover:text-gray-700 dark:hover:text-gray-300"
				)
		.items-center.justify-between.hidden.w-full(
			id="navbar-search"
			class="md:flex md:w-auto md:order-1"
		)
			.relative.mt-3(
				class="md:hidden"
			)
				.absolute.inset-y-0.left-0.flex.items-center.pl-3.pointer-events-none
					Icon.w-5.h-5(
						name="fa6-solid:magnifying-glass"
						size="24"
						class="text-gray-500"
					)
				input.block.w-full.p-2.pl-10.text-sm.text-gray-900.border.border-gray-300.rounded-lg.bg-gray-50(
					id="search-navbar"
					type="text"
					class="focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
				)
			.flex.flex-col.p-4.mt-4.border.border-gray-100.rounded-lg.bg-gray-50(
				class="md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			)
				NuxtLink.block.py-2.pl-3.pr-4.text-white.bg-blue-700.rounded(
					v-for="link of navigation"
					:key="link._path"
					:to="link._path"
					active-class="font-bold"
					class="md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				) {{ link.navTitle || link.title }}
</template>

<script setup lang="ts">
const { data: navigation } = useLazyAsyncData('navigation', () => fetchContentNavigation().then(navigation => navigation.slice(1)))
</script>
