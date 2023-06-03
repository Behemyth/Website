<template lang="pug">
nav.max-w-5xl.w-full.mx-auto.p-4.bg-white.shadow(
	class="dark:bg-gray-900"
)
	.flex.items-center.justify-between.mx-auto
		NuxtLink.flex.flex-none.items-center.p-2(
			to="/contact",
			class="md:p-4",
		)
			img.h-9.mr-1.rounded-full(
				src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200",
				class="md:h-12",
				alt="Asher's Face"
			)
		NavList.hidden(
			:list="navigation? navigation: []"
			class="md:flex"
		)
		NavListButton(
			:list="navigation? navigation: []"
			class="md:hidden"
		)
		NavSearch.hidden(
			:navigation="navigation",
			class="md:flex"
		)
		NavSearchButton(
			:navigation="navigation",
			class="md:hidden"
		)
		ColorModeSwitch.flex-none.p-2(
			class="md:p-4 hover:text-gray-700 dark:hover:text-gray-300"
		)
</template>

<script setup lang="ts">
const { data: navigation } = useLazyAsyncData('navigation', () => fetchContentNavigation().then(navigation => navigation.slice(1)))

</script>
