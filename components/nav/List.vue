<template lang="pug">
.flex.flex-row.items-center.justify-between.space-x-4.p-4(
	id="navbar-search"
)
	NuxtLink.px-2.text-gray-700(
		v-for="link of props.list"
		:key="link._path"
		:to="link._path"
		active-class="font-bold"
		class="dark:text-gray-400"
	) {{ link.navTitle || link.title }}
</template>

<script setup lang="ts">

import { NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

</script>
