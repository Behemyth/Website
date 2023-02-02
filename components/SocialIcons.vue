<template lang="pug">
.flex.space-x-6
	NuxtLink(v-for="social in socials", :key="social.name", :to="social.link")
		Icon(:name="social.icon", :size="size")
		span.sr-only {{ social.name }}
</template>

<script setup lang="ts">

import type { Social } from '../schema/metadata'

const props = defineProps({
	socials: {
		type: Array<Social>,
		required: true
	},
	size: {
		type: String,
		default: ''
	}
})

const socials = computed(() => {
	const socials = props.socials
	return socials
})
const size = computed(() => {
	const size = props.size
	return size
})

</script>
