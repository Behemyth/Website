<template>
	<Giscus
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
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'

const props = defineProps({
	category: {
		type: String,
		required: true
	}
})
</script>

