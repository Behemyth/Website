export type FeedFormat = 'json' | 'xml' | 'atom';
export type FeedKey = 'blog' | 'photography' | 'review/movie' | 'review/show';

export interface ContentFeed {
	key: FeedKey;
	collection: 'blog' | 'photography' | 'movie' | 'show';
	title: string;
	description: string;
	feedPath: string;
	homePath: string;
	labelKey: 'feed.blog' | 'feed.photography' | 'feed.movieReviews' | 'feed.showReviews';
}

export const contentFeeds: readonly ContentFeed[] = [
	{
		key: 'blog',
		collection: 'blog',
		title: 'Blog',
		description: 'A collection of my blog posts and articles.',
		feedPath: '/feed/blog',
		homePath: '/blog',
		labelKey: 'feed.blog',
	},
	{
		key: 'photography',
		collection: 'photography',
		title: 'Photography',
		description: 'A collection of my photography work.',
		feedPath: '/feed/photography',
		homePath: '/photography',
		labelKey: 'feed.photography',
	},
	{
		key: 'review/movie',
		collection: 'movie',
		title: 'Movie Reviews',
		description: 'A collection of my movie reviews.',
		feedPath: '/feed/review/movie',
		homePath: '/review/movie',
		labelKey: 'feed.movieReviews',
	},
	{
		key: 'review/show',
		collection: 'show',
		title: 'Show Reviews',
		description: 'A collection of my TV show reviews.',
		feedPath: '/feed/review/show',
		homePath: '/review/show',
		labelKey: 'feed.showReviews',
	},
];

const normalizePath = (path: string): string => {
	const withoutQuery = path.split(/[?#]/, 1)[0] ?? '/';
	if (withoutQuery === '/') return withoutQuery;
	return withoutQuery.replace(/\/+$/, '');
};

export const getFeedByKey = (key: string): ContentFeed | undefined =>
	contentFeeds.find(feed => feed.key === key);

export const getFeedForPath = (path: string): ContentFeed | undefined => {
	const normalizedPath = normalizePath(path);

	return contentFeeds.find(feed =>
		normalizedPath === feed.homePath || normalizedPath.startsWith(`${feed.homePath}/`),
	);
};

export const getFeedUrl = (feed: ContentFeed, format: FeedFormat): string =>
	`${feed.feedPath}.${format}`;
