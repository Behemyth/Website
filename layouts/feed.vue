<template lang="pug">
main.flex.flex-col.min-h-dvh.prose.max-w-5xl.mx-auto(class="dark:prose-invert")
	AppHeader
	span {{ route.path }}
	.grow.px-4.py-4
		slot
	AppFooter
</template>

<script setup lang="ts">

const route = useRoute()
prerenderRoutes(route.path + '/feed')

</script>
