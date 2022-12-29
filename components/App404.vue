<template lang="pug">
h1 What is this {{ name }} is not there

</template>

<script setup lang="ts">
defineProps({
	name: {
		type: String,
		required: true
	}
})

</script>
