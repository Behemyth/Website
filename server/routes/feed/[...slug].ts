import { getFeedByKey } from '#shared/utils/feeds';

export default defineCachedEventHandler(async (event) => {
	const { queryCollection } = await import('@nuxt/content/server');

	const slugParts = getRouterParam(event, 'slug');
	if (!slugParts) {
		throw createError({ status: 404, message: 'Feed not found' });
	}

	// Parse format extension from last segment (e.g. "blog.json" → "blog" + ".json")
	const parsed = parseFeedFormat(slugParts);
	if (!parsed) {
		throw createError({ status: 404, message: 'Invalid feed format. Use .json, .xml, or .atom' });
	}

	const { format } = parsed;
	// Strip the extension to get the feed key (e.g. "blog.json" → "blog", "review/movie.xml" → "review/movie")
	const feedKey = slugParts.replace(/\.(json|xml|atom)$/, '');

	const feedEntry = getFeedByKey(feedKey);
	if (!feedEntry) {
		throw createError({ status: 404, message: 'Feed not found' });
	}

	const siteUrl = getSiteConfig(event).url;
	const author = getDefaultAuthor(siteUrl);
	const feed = createFeed(feedEntry, siteUrl, author);

	const data = await queryCollection(event, feedEntry.collection)
		.order('date_published', 'DESC')
		.all();

	for (const page of data) {
		const p = page as unknown as {
			id: string;
			path?: string;
			title: string;
			description?: string;
			date_published: Date | string;
			date_modified: Date | string;
		};

		const itemData = {
			id: p.id,
			path: p.path ?? '/',
			title: p.title,
			description: p.description ?? '',
			date_published: new Date(p.date_published),
			date_modified: new Date(p.date_modified),
			image: getItemImage(page, siteUrl),
			tags: getItemTags(page),
		};

		addFeedItem(feed, itemData, siteUrl, author);
	}

	const response = getFeedResponse(feed, format);
	setResponseHeader(event, 'content-type', response.contentType);
	setResponseHeader(event, 'cache-control', 'public, max-age=3600, s-maxage=3600');

	return response.content;
}, {
	name: 'feed',
	maxAge: 3600,
	getKey: event => getRouterParam(event, 'slug') ?? 'unknown',
});
