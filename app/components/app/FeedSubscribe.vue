<template>
	<UButton
		v-if="resolvedFeed"
		:to="getFeedUrl(resolvedFeed, 'xml')"
		external
		icon="i-lucide-rss"
		color="neutral"
		variant="outline"
		:aria-label="$t('feed.subscribeTo', { name: $t(resolvedFeed.labelKey) })"
		:title="$t('feed.subscribeTo', { name: $t(resolvedFeed.labelKey) })"
	>
		{{ $t('feed.subscribe') }}
	</UButton>
</template>

<script setup lang="ts">
import {
	getFeedForPath,
	getFeedUrl,
	type ContentFeed,
} from '#shared/utils/feeds';

const props = defineProps<{
	feed?: ContentFeed;
}>();

const route = useRoute();
const resolvedFeed = computed(() => props.feed ?? getFeedForPath(route.path));
</script>
