<template lang="pug">
.grid.grid-flow-row.gap-4.grid-cols-1(class="md:gap-8 md:grid-cols-2")
	ReviewPreview(v-for="review in reviews", :key="review.title", :type="type",:content="review")
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
	},
	limit: {
		type: Number,
		default: 0
	}
})

const type = computed(() => {
	switch (props.category) {
	case 'movie': {
		return 'movie'
	}
	case 'show': {
		return 'tv'
	}
	default: {
		throw new TypeError('No ' + props.category + ' type')
	}
	}
}).value

const reviews = await queryContent<NuxtContentReview>('reviews', props.category)
	.where({ layout: 'review' })
	.sort({ date: -1 }).limit(props.limit).find()

</script>
