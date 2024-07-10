import { serverQueryContent } from '#content/server'
import type { NuxtContent, NuxtFeed, JSONFeed, JSONFeedAuthor, JSONFeedItem } from '~/types/content'

export default defineEventHandler(async (event) => {
	const path = '/reviews/show'
	const feedContent: NuxtFeed | undefined = await serverQueryContent<NuxtFeed>(event, path).findOne()

	if (!feedContent) {
		throw createError({
			statusCode: 404,
			statusMessage:
				'Feed not found'
		})
	}

	const author: JSONFeedAuthor = {
		name: 'Asher Norland',
		url: new URL('/contact', 'https://ashernorland.com').toString(),
		avatar: new URL('/avatar/293a56bef971ab4999d6230491957d33', 'https://www.gravatar.com').toString()
	}

	const feed: JSONFeed = {
		version: 'https://jsonfeed.org/version/1.1',
		title: feedContent.title,
		home_page_url: new URL('https://ashernorland.com').toString(),
		feed_url: new URL(path, 'https://ashernorland.com').toString(),
		description: feedContent.description,
		user_comment: 'Copyright © ' + new Date().getFullYear() + ' Asher Norland',
		icon: new URL('/favicon.ico', 'https://ashernorland.com').toString(),
		favicon: new URL('/favicon.ico', 'https://ashernorland.com').toString(),
		author: [author],
		language: 'en-US',
		expired: false,
		items: []
	}

	const docs: NuxtContent[] = await serverQueryContent<NuxtContent>(event, path)
		.sort({ date: -1 })
		.where({ layout: 'review' })
		.find()

	for (const post of docs) {
		let contentPath = post._path
		contentPath = contentPath ??= '/'

		const item: JSONFeedItem = {
			id: post.url,
			url: new URL(contentPath, 'https://ashernorland.com').toString(),
			title: post.title,
			content_html: '',
			summary: post.description,
			date_published: new Date(post.date_published).toISOString(),
			date_modified: new Date(post.date_modified).toISOString(),
			author: [author],
			tags: [],
			language: 'en-US',
			attachments: []
		}
		feed.items.push(item)
	}

	event.node.res.setHeader('Content-Type', 'application/feed+json')
	return feed
})
