<template lang="pug">
.grid.grid-flow-row.gap-4.grid-cols-1(class="md:gap-8 md:grid-cols-2")
	ReviewPreview(v-for="review in reviews", :key="review.title", :content="review")
span.text-sm.text-gray-500(class="sm:text-center dark:text-gray-400") These reviews uses the TMDB API but is not endorsed or certified by TMDB.
</template>

<script setup lang="ts">

import type { NuxtContentReview } from '~/types/movie'

const props = defineProps({
	size: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	}
})

const reviews = await queryContent<NuxtContentReview>('reviews', props.category)
	.where({ layout: 'review' })
	.sort({ date: -1 }).limit(4).find()

</script>
