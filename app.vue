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
				title: content.title,
				type: 'application/feed+json',
				href: '/feed' + content._path
			}
		})
	})

useHead({
	link: links
})
</script>
