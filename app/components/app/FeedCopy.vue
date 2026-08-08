<template>
	<UButton
		v-if="resolvedFeed"
		:icon="copied ? appConfig.ui.icons.copyCheck : appConfig.ui.icons.copy"
		color="neutral"
		variant="outline"
		:loading="copyPending"
		:aria-label="$t('feed.copyUrlFor', { name: $t(resolvedFeed.labelKey) })"
		:title="$t('feed.copyUrlFor', { name: $t(resolvedFeed.labelKey) })"
		@click="copyFeedUrl(resolvedFeed)"
	>
		{{ $t('feed.copyUrl') }}
	</UButton>
</template>

<script setup lang="ts">
import {
	getFeedForPath,
	type ContentFeed,
} from '#shared/utils/feeds';

const props = defineProps<{
	feed?: ContentFeed;
}>();

const appConfig = useAppConfig();
const route = useRoute();
const resolvedFeed = computed(() => props.feed ?? getFeedForPath(route.path));
const { copied, copyFeedUrl, copyPending } = useFeedClipboard();
</script>
