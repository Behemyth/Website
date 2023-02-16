<template lang="pug">
.items-center.justify-between.w-full(
	id="navbar-search"
	class="md:flex md:w-auto"
)
	.flex.flex-col.p-4.border.border-gray-100.rounded-lg.bg-gray-50(
		class="md:flex-row md:space-x-4 md:items-center md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	)
		NuxtLink.block.py-4.pl-2.pr-2.text-gray-700.rounded(
			v-for="link of list"
			:key="link._path"
			:to="link._path"
			active-class="font-bold"
			class="md:p-0 dark:text-gray-400"
		) {{ link.navTitle || link.title }}
</template>

<script setup lang="ts">
const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

const list = computed(() => {
	const socials = props.list
	return socials
})
</script>
