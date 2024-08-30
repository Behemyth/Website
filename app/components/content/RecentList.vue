<template>
	<div class="not-prose grid grid-flow-row gap-2 grid-cols-1 md:gap-4 md:grid-cols-2">
		<ReviewPreview v-for="review in reviews" :key="review.title" :type="props.category" :content="review" />
	</div>
	<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">These reviews uses the TMDB API but is not
		endorsed or certified by TMDB.</span>
</template>

<script setup lang="ts">

import type { NuxtContentReview } from 'types/movie'
import type { MediaType } from 'types/tmdb';

const props = defineProps({
	size: {
		type: Number,
		required: true
	},
	category: {
		type: String as PropType<MediaType>,
		required: true
	},
	limit: {
		type: Number,
		default: 0
	}
})

const reviews = await queryContent<NuxtContentReview>('reviews', props.category)
	.where({ layout: 'review' })
	.sort({ date_published: -1 }).limit(props.limit).find()

</script>
