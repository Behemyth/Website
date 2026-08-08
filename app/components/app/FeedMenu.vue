<template>
	<UDropdownMenu
		:items="items"
		:content="{ align: 'end' }"
	>
		<UButton
			icon="i-lucide-rss"
			color="neutral"
			variant="ghost"
			:aria-label="$t('feed.feeds')"
			:title="$t('feed.feeds')"
		/>
	</UDropdownMenu>
</template>

<script setup lang="ts">
import { contentFeeds } from '#shared/utils/feeds';

const { t } = useI18n();
const { copyFeedUrl } = useFeedClipboard();

const items = computed(() => [
	{
		label: t('feed.copyUrl'),
		type: 'label' as const,
	},
	...contentFeeds.map(feed => ({
		label: t(feed.labelKey),
		icon: 'i-lucide-copy',
		onSelect: () => copyFeedUrl(feed),
	})),
]);
</script>
