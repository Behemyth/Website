<template lang="pug">
.h-40.flex-none.bg-cover.rounded-t.text-center.overflow-hidden(class="lg:h-80 lg:w-52  lg:rounded-t-none lg:rounded-l" :style="backgroundStyles" :title="data?.title")
.max-w-sm.bg-white.border.border-gray-200.rounded-lg.shadow.flex.flex-col.p-4.justify-between.leading-normal(class="dark:bg-gray-800 dark:border-gray-700")
	NuxtLink(:to="props.content._path", :title="data?.title")
	.p-5
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

const img = useImage()
const backgroundStyles = computed(() => {
	const url = img(data.value?.poster_path ? `${config.public.imageBase}/${data.value?.poster_path}` : '/images/tmdb.svg', {}, {})
	return { backgroundImage: `url('${url}')` }
})

const { data } = await useFetch<Media>(`/api/media/${props.content.TMDB_ID}`)

</script>
~/types/tqdm
