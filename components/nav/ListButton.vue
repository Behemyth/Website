<template lang="pug">
div
	UButton(icon="i-mdi-hamburger-menu" color="primary" square label="Open" @click="isOpen = true")
		span.sr-only Open main menu
	USlideover(v-model="isOpen" side="left")
		UVerticalNavigation(:links="links" :ui="{size: 'text-2xl'}" @click="isOpen = false" )
</template>

<script setup lang="ts">

import type { VerticalNavigationLink } from '#ui/types'

const isOpen = ref(false)

const props = defineProps({
	list: {
		type: Array<any>,
		required: true
	}
})

const links = computed(() => {
	const array: VerticalNavigationLink[] = props.list.map((link: any) => {
		return {
			label: link.navTitle || link.title,
			to: link._path
		}
	})

	return array
})

</script>
