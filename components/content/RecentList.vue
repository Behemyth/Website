<template lang="pug">
.flex.space-x-6
	ReviewPreview(v-for="review in reviews", :key="review.category", :content="review")
</template>

<script setup lang="ts">

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

const reviews = await queryContent('reviews', props.category)
	.where({ layout: 'review' })
	.sort({ date: 1 }).limit(3).find()

</script>
