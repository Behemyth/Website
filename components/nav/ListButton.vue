<template lang="pug">
NavList(:list="list")
</template>

<script setup lang="ts">
const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

const list = computed(() => {
	const list = props.list
	return list
})
</script>
