<template lang="pug">
h1 What is this? {{ name }} was not found

</template>

<script setup lang="ts">
defineProps({
	name: {
		type: String,
		required: true
	}
})

</script>
