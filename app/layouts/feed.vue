<template >
main.flex.flex-col.min-h-dvh.prose.max-w-5xl.mx-auto(class="dark:prose-invert")
	AppHeader
	.grow.px-4.py-4
		slot
	AppFooter
</template>

<script setup lang="ts">

// const route = useRoute()
// prerenderRoutes('/feed' + route.path)

</script>
