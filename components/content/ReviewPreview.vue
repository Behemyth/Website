<template lang="pug">
ULink.h-32.flex.w-full.items-center.bg-white.border.border-gray-200.rounded-lg.shadow(:to="props.content._path", :title="data?.title" class="md:h-48 lg:h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700")
	NuxtImg.h-32.m-0.rounded-s-lg(:src="imgURL" preload class="aspect-[2/3] md:h-48 lg:h-64")
	.flex.flex-col.justify-between.p-4.leading-normal
		h5.mb-2.font-bold.tracking-tight.text-gray-900(class="md:text-l lg:text-xl dark:text-white") {{ data?.title }}
		Rating(:value="content.rating" :size="16")
		p.mb-3.font-normal.text-gray-700(class="dark:text-gray-400") {{ content.description }}
</template>

<script setup lang="ts">

import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Media } from '~/types/tmdb'

interface Review extends ParsedContent {
	intRating: number,
	entRating: number,
	rating: number
}

const props = defineProps({
	content: {
		type: Object as () => Review,
		required: true
	}
})

// TODO: Make a composable for this
const config = useRuntimeConfig()

const imgURL = computed(() => {
	return data.value?.poster_path ? `${config.public.imageBase}/${data.value?.poster_path}` : '/images/tmdb.svg'
})

const { data } = await useFetch<Media>(`/api/media/${props.content.TMDB_ID}`)

</script>
~/types/tqdm
