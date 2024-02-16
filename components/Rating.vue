<template lang="pug">
.relative(class="aspect-[9/2]")
	Icon(v-for="index in fullStars" :key="index" name="material-symbols:star" :size="props.size.toString()" aria-hidden="true")
	Icon(v-for="index in halfStars" :key="index" name="material-symbols:star-half-outline" :size="props.size.toString()" aria-hidden="true")
	Icon(v-for="index in noStars" :key="index" name="material-symbols:star-outline" :size="props.size.toString()" aria-hidden="true")
</template>

<script setup lang="ts">
const props = defineProps({
	value: {
		type: Number,
		default: 0
	},
	size: {
		type: Number,
		required: true
	}
})

const fullStars = computed(() => (
	Math.floor(props.value / 2)
))

const halfStars = computed(() => (
	props.value % 2
))

const noStars = computed(() => (
	4 - props.value / 2
))

</script>
