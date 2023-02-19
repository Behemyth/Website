<template lang="pug">
.flex.flex-row.items-center.justify-between.p-4.border.space-x-4.rounded-lg(
	id="navbar-search"
)
	NuxtLink.py-4.pl-2.pr-2.text-gray-700.rounded(
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
	const list = props.list
	return list
})
</script>
