import { serverQueryContent } from '#content/server'
import type { NuxtContent, NuxtFeed, JSONFeed, JSONFeedItem } from '~/types/content'

export default defineEventHandler(async (event) => {
	// Get the path from the router
	let pathName = getRouterParam(event, 'path')
	pathName = pathName ??= '/'

	const path = new URL(pathName, 'https://ashernorland.com')

	const feedContent: NuxtFeed | undefined = await serverQueryContent<NuxtFeed>(event, path).where({ _path: path.pathname }).findOne()

	if (!feedContent) {
		throw new Error('Feed not found')
	}

	const feed: JSONFeed = {
		version: 'https://jsonfeed.org/version/1.1',
		title: feedContent.title,
		description: feedContent.description,
		home_page_url: new URL(path, 'https://ashernorland.com').toString(),
		language: 'en-US',
		items: []
	}

	const docs = await serverQueryContent<NuxtContent>(event, path.pathname).sort({ date: -1 }).where({ layout: "review" }).find()

	for (const post of docs) {
		const item: JSONFeedItem = {
			id: post.id,
			title: post.title
		}
		feed.items.push(item)
	}

	event.node.res.setHeader('Content-Type', 'application/feed+json')
	return feed
})
