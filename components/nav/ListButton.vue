<template lang="pug">
NavList(:list="props.list")
</template>

<script setup lang="ts">

import { NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
	list: {
		type: Array<NavItem>,
		required: true
	}
})

</script>
