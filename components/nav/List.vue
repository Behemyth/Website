<template lang="pug">
.flex.flex-row.items-center.justify-between.space-x-4.p-2(
	id="navbar-search"
)
	NuxtLink.px-2.text-gray-700(
		v-for="link of props.list"
		:key="link._path"
		:to="link._path"
		class="dark:text-gray-400 focus:font-bold"
	) {{ link.navTitle || link.title }}
</template>

<script setup lang="ts">

const props = defineProps({
	list: {
		type: Array<any>,
		required: true
	}
})

</script>
