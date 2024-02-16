<template lang="pug">
nav.max-w-5xl.w-full.mx-auto.p-1.bg-white.shadow(
	class="dark:bg-gray-900"
)
	.flex.items-center.justify-evenly.mx-auto
		NavList.hidden(
			:list="navigation"
			class="md:flex"
		)
		NavListButton(
			:list="navigation"
			class="md:hidden"
		)
		ULink.flex.flex-none.items-center.p-2(
			to="/contact",
			class="md:p-4",
			rel="author"
		)
			NuxtImg.h-9.mr-1.rounded-full(
				src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200",
				class="md:h-12",
				alt="Asher's Face"
				preload
			)

		//- NavSearch.hidden(
		//- 	:navigation="navigation",
		//- 	class="md:flex"
		//- )
		//- NavSearchButton(
		//- 	:navigation="navigation",
		//- 	class="md:hidden"
		//- )
		ColorModeSwitch(
			class="hover:text-gray-700 dark:hover:text-gray-300"
		)
</template>

<script setup lang="ts">
const navigation = await fetchContentNavigation()

</script>
