<template lang="pug">
NavList(:list="props.list")
</template>

<script setup lang="ts">

const props = defineProps({
	list: {
		type: Array<any>,
		required: true
	}
})

</script>
