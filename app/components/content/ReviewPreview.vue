<template>
	<ULink
		:to="props.content._path" :title="data.title"
		class="not-prose h-32 flex w-full items-center bg-white border border-gray-200 rounded-lg shadow md:h-48 lg:h-64 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		<NuxtPicture
			:src="data.poster_path" preload :img-attrs="{ class: 'rounded-s-lg' }"
			class="h-32 aspect-[2/3] md:h-48 lg:h-64" />
		<div class="flex flex-col justify-between p-4 leading-normal">
			<h5 class="prose dark:prose-invert mb-2 font-bold tracking-tight text-gray-900 md:text-l lg:text-xl dark:text-white">{{ data.title
				}}</h5>
			<StarRating :value="props.content.rating" :size="16" />
			<p class="prose dark:prose-invert mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.content.description }}</p>
		</div>
	</ULink>
</template>

<script setup lang="ts">

import type { MediaType } from 'types/tmdb'
import type { NuxtContentReview } from 'types/movie'

const props = defineProps({
	type: {
		type: String as PropType<MediaType>,
		required: true
	},
	content: {
		type: Object as () => NuxtContentReview,
		required: true
	}
})

const data = GetMedia(props.type, props.content.TMDB_ID)

</script>
