import {
	getFeedForPath,
	getFeedUrl,
} from '#shared/utils/feeds';

export const useContentFeed = () => {
	const route = useRoute();
	const { t } = useI18n();
	const feed = computed(() => getFeedForPath(route.path));

	useHead(() => ({
		link: feed.value
			? (['xml', 'atom', 'json'] as const).map(format => ({
					rel: 'alternate' as const,
					title: t(feed.value!.labelKey),
					type: format === 'xml'
						? 'application/rss+xml'
						: format === 'atom'
							? 'application/atom+xml'
							: 'application/feed+json',
					href: getFeedUrl(feed.value!, format),
				}))
			: [],
	}));

	return { feed };
};
