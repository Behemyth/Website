<template lang="pug">
NuxtPage
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const links =
	await queryContent('/').where({ layout: 'feed' }).find().then((value) => {
		return value.map((content: ParsedContent) => {
			return {
				rel: 'alternate',
				type: 'application/rss+xml',
				title: content.title,
				href: 'https://www.ashernorland.com/rss/' + content._path
			}
		})
	})

useHead({
	link: links
})
</script>
