<template lang="pug">
.max-w-sm.bg-white.border.border-gray-200.rounded-lg.shadow(class="dark:bg-gray-800 dark:border-gray-700")
	NuxtLink(:to="props.content._path", :title="data?.title")
		NuxtImg(:src="imgUrl", :alt="data?.title", class="rounded-t-lg" preload)
	.p-5
		NuxtLink(:to="props.content._path", :title="data?.title")
			h5.mb-2.text-2xl.font-bold.tracking-tight.text-gray-900(class="dark:text-white") {{ data?.title }}
		span.text-sm.text-gray-500(class="sm:text-center dark:text-gray-400") This review uses the TMDB API but is not endorsed or certified by TMDB.
</template>

<script setup lang="ts">

import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Media } from '~/types/tmdb'

interface Review extends ParsedContent {
}

const props = defineProps({
	content: {
		type: Object as () => Review,
		required: true
	}
})

// TODO: Make a composable for this
const config = useRuntimeConfig()
const imgUrl = computed(() => data.value?.backdrop_path ? `${config.public.imageBase}/${data.value?.backdrop_path}` : '/images/tmdb.svg')

const { data } = await useFetch<Media>(`/api/media/${props.content.TMDB_ID}`)

</script>
~/types/tqdm
