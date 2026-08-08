<template>
	<UInputRating
		:model-value="value / 2"
		:length="4"
		:step="0.5"
		:size="size === 24 ? 'lg' : 'sm'"
		icon="i-mdi-star"
		empty-icon="i-mdi-star-outline"
		color="neutral"
		readonly
		:ui="ratingUi"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	value: {
		type: Number,
		default: 0,
	},
	size: {
		type: Number,
		required: true,
	},
});

const ratingUi = computed(() => ({
	root: 'gap-0',
	...(props.size === 14 && {
		item: 'size-[14px]',
		icon: 'size-[14px]',
		emptyIcon: 'size-[14px]',
	}),
}));
</script>
