<template lang="pug">
nav.max-w-5xl.w-full.mx-auto.p-1.bg-white.shadow(
	class="dark:bg-gray-900"
)
	.flex.items-center.justify-around.mx-auto(class="md:justify-evenly")

		UHorizontalNavigation.hidden.border-b.border-gray-200(:links="links" class="md:flex dark:border-gray-800")
		.h-full.aspect-square(class="md:hidden")
			UButton(icon="i-mdi-hamburger-menu" color="primary" square label="Open" @click="isOpen = true")
				span.sr-only Open main menu
			USlideover(v-model="isOpen" side="left")
				UVerticalNavigation(:links="links" :ui="{size: 'text-2xl'}" @click="isOpen = false" )
		ULink.flex.flex-none.items-center.p-2(
			to="/contact",
			class="md:p-4",
			rel="author"
		)
			NuxtPicture(
				src="/gravatar/avatar/293a56bef971ab4999d6230491957d33",
				:img-attrs="{class:'h-9 md:h-12 mr-1 rounded-full'}"
				preload
			)

		ColorModeSwitch(
			class="hover:text-gray-700 dark:hover:text-gray-300"
		)
</template>

<script setup lang="ts">

const isOpen = ref(false)

const navigation = await fetchContentNavigation()

const links = computed(() => {
	return navigation.map((link: any) => {
		return {
			label: link.navTitle || link.title,
			to: link._path
		}
	})
})

</script>
