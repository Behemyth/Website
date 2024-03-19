<template lang="pug">
AppLayout
	NuxtPage
</template>

<script setup lang="ts">
useHead({
	link: [
		{
			rel: 'alternate',
			type: 'application/rss+xml',
			title: 'RSS Feed',
			href: 'https://www.ashernorland.com/rss'
		}
	]
})
</script>
