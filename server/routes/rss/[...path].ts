import { toXML } from 'jstoxml'
import { serverQueryContent } from '#content/server'
import type { NuxtContent, NuxtFeed, RSSFeed, RSSEntry, RSSChannel } from '~/types/content'

export default defineEventHandler(async (event) => {
	const path = getRouterParam(event, 'path')

	const feedContent = await serverQueryContent<NuxtFeed>(event).where({ _partial: false }).findOne()

	const channel: RSSChannel = {
		title: feedContent.title,

		description: feedContent.description,
		id: feedContent._id,
		link: 'https://ashernorland.com/' + path,
		language: 'en',
		image: feedContent.image,
		favicon: 'http://ashernorland.com/favicon.ico',
		copyright: 'Copyright © ' + new Date().getFullYear() + ' Asher Norland',
		updated: new Date(),
		generator: 'Feed for Node.js',
		feedLinks: {
			rss: 'https://ashernorland.com/rss/' + path
		},
		author: {
			name: 'Asher Norland',
			email: 'asher.norland@gmail.com',
			link: 'https://ashernorland.com/contact'
		},
		item: []
	}

	const entry: RSSEntry = {
		channel
	}

	const feed: RSSFeed = {
		rss: entry
	}

	const docs = await serverQueryContent<NuxtContent>(event).sort({ date: -1 }).where({ _partial: false }).find()

	for (const post of docs) {
		feed.rss.channel.item.push({
			title: post.title,
			id: post._id,
			link: post._path,
			description: post.description,
			content: post.content,
			author: [
				{
					name: 'Asher Norland',
					email: 'asher.norland@gmail.com',
					link: 'https://ashernorland.com/contact'
				}
			],
			date: post.date,
			image: post.image
		})
	}

	const config = {
		indent: '	'
	}

	return toXML(feed, config)
})
