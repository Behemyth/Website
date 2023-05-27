<template lang="pug">
NavSearch(:navigation="props.navigation")
</template>

<script setup lang="ts">

const props = defineProps({
	navigation: {
		type: Object as PropType<any>,
		required: true
	}
})
</script>
