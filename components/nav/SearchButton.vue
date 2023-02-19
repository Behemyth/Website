<template lang="pug">
NavSearch(:list="list")
</template>

<script setup lang="ts">
const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

const list = computed(() => {
	const navigationList = props.list
	return navigationList
})
</script>
