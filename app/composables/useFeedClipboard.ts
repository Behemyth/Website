import { useClipboard } from '@vueuse/core';
import { getFeedUrl, type ContentFeed } from '#shared/utils/feeds';

export const useFeedClipboard = () => {
	const { t } = useI18n();
	const toast = useToast();
	const { copy, copied, copyPending } = useClipboard({ legacy: true });

	const copyFeedUrl = async (feed: ContentFeed) => {
		try {
			const feedUrl = new URL(getFeedUrl(feed, 'xml'), window.location.origin).href;
			await copy(feedUrl);
			toast.add({
				title: t('feed.copied'),
				icon: 'i-lucide-clipboard-check',
			});
		}
		catch {
			toast.add({
				title: t('feed.copyFailed'),
				icon: 'i-lucide-clipboard-x',
			});
		}
	};

	return {
		copied,
		copyFeedUrl,
		copyPending,
	};
};
