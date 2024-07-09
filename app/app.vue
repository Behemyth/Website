<template>
	<NuxtPage />
</template>

<script setup lang="ts">
const links =
	await queryContent('/').where({ layout: 'feed' }).find().then((value) => {
		return value.map((content) => {
			return {
				rel: 'alternate',
				title: content.title,
				type: 'application/feed+json',
				href: content._path + '/feed'
			}
		})
	})

useHead({
	link: links
})
</script>
