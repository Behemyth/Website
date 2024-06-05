<template lang="pug">
NuxtPage
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const links =
	await queryContent('/').where({ feed: true }).find().then((value) => {
		return value.map((content: ParsedContent) => {
			return {
				rel: 'alternate',
				title: content.title,
				type: 'application/feed+json',
				href: 'https://www.ashernorland.com/feed' + content._path
			}
		})
	})

useHead({
	link: links
})
</script>
