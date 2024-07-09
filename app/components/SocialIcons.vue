<template >
.flex.space-x-6
	ULink(v-for="social in props.socials", :key="social.name", :to="social.link", :title="social.name")
		UIcon.shrink-0.w-6.h-6.align-middle(
			:name="social.icon",
			class="text-gray-900 dark:text-gray-300"
		)
</template>

<script setup lang="ts">

import type { Social } from '~/types/metadata'

const props = defineProps({
	socials: {
		type: Array<Social>,
		required: true
	}
})

</script>
