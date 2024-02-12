<template lang="pug">
.max-w-sm.bg-white.border.border-gray-200.rounded-lg.shadow(class="dark:bg-gray-800 dark:border-gray-700")
	NuxtLink(:to="props.content._path", :title="props.content.title")
	.p-5
		NuxtLink(:to="props.content._path", :title="props.content.title")
			h5.mb-2.text-2xl.font-bold.tracking-tight.text-gray-900(class="dark:text-white") {{ props.content.title }}
</template>

<script setup lang="ts">

import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface Review extends ParsedContent {
}

const props = defineProps({
	content: {
		type: Object as () => Review,
		required: true
	}
})
</script>
