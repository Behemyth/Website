import { serverQueryContent } from '#content/server'
import type { NuxtContent, NuxtFeed, JSONFeed, JSONFeedItem } from '~/types/content'

export default defineEventHandler(async (event) => {
	// Get the path from the router
	let path = getRouterParam(event, 'path')
	path = path ??= '/'

	const feedContent = await serverQueryContent<NuxtFeed>(event).where({ _partial: false }).findOne()

	const feed: JSONFeed = {
		version: 'https://jsonfeed.org/version/1.1',
		title: feedContent.title,
		description: feedContent.description,
		home_page_url: new URL(path, 'https://ashernorland.com').toString(),
		language: 'en-US',
		items: []
	}

	const docs = await serverQueryContent<NuxtContent>(event).sort({ date: -1 }).where({ _partial: false }).find()

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
