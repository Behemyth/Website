<template lang="pug">
.flex.space-x-6
	span(v-for="item in recent", :key="item.category") {{ item.title }}
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

const recent = await queryContent('reviews', props.category)
	.sort({ date: 1 }).limit(3).find()

</script>
