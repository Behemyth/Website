<template>
	<Giscus
	v-if="colorMode.preference === 'dark'"
	repo="Behemyth/Website"
	repo-id="R_kgDOGNxb4w"
	:category="props.category"
	category-id="DIC_kwDOGNxb484Chz_u"
	mapping="title"
	strict="1"
	reactions-enabled="1"
	emit-metadata="1"
	input-position="top"
	theme="dark"
	lang="en"
	loading="lazy"
	/>
	<Giscus
	v-else
	repo="Behemyth/Website"
	repo-id="R_kgDOGNxb4w"
	:category="props.category"
	category-id="DIC_kwDOGNxb484Chz_u"
	mapping="title"
	strict="1"
	reactions-enabled="1"
	emit-metadata="1"
	input-position="top"
	theme="light"
	lang="en"
	loading="lazy"
	/>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'

const colorMode = useColorMode()

const props = defineProps({
	category: {
		type: String,
		required: true
	}
})
</script>

