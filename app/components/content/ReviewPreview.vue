<template>
	<ULink
		:to="props.content._path" :title="data?.title"
		class="h-32 flex w-full items-center bg-white border border-gray-200 rounded-lg shadow md:h-48 lg:h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		<NuxtPicture
			:src="imgURL" preload :img-attrs="{ class: 'rounded-s-lg' }"
			class="h-32 aspect-[2/3] md:h-48 lg:h-64" />
		<div class="flex flex-col justify-between p-4 leading-normal">
			<h5 class="mb-2 font-bold tracking-tight text-gray-900 md:text-l lg:text-xl dark:text-white">{{ data?.title
				}}</h5>
			<StarRating :value="content.rating" :size="16" />
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ content.description }}</p>
		</div>
	</ULink>
</template>

<script setup lang="ts">

import type { Media } from '@schema/tmdb'
import type { NuxtContentReview } from '@schema/movie'

const props = defineProps({
	type: {
		type: String,
		required: true
	},
	content: {
		type: Object as () => NuxtContentReview,
		required: true
	}
})

const imgURL = computed(() => {
	return data.value?.poster_path ? `/tmdb${data.value?.poster_path}` : '/images/tmdb.svg'
})

const { data } = await useFetch<Media>(`/api/tmdb/media/${props.type}/${props.content.TMDB_ID}`)

</script>
