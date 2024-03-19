import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
	const path = getRouterParam(event, 'path')

	const feedContent = await serverQueryContent(event).where({ _partial: false }).findOne()

	const feed = new Feed({
		title: feedContent.title,
		description: feedContent.description,
		id: feedContent._id,
		link: 'https://ashernorland.com/' + path,
		language: 'en',
		image: feedContent.image,
		favicon: 'http://ashernorland.com/favicon.ico',
		copyright: 'Copyright © ' + new Date().getFullYear() + ' Asher Norland',
		feedLinks: {
			rss: 'https://ashernorland.com/rss/' + path
		},
		author: {
			name: 'Asher Norland',
			email: 'asher.norland@gmail.com',
			link: 'https://ashernorland.com/contact'
		}
	})

	const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
	const posts = docs.filter(doc => doc?._path?.includes('/blog'))

	for (const post of posts) {
		feed.addItem({
			title: ,
			id: ,
			link: ,
			description: ,
			content: ,
			author: [
				{
					name: 'Asher Norland',
					email: 'asher.norland@gmail.com',
					link: 'https://ashernorland.com/contact'
				}
			],
			date: ,
			image:
		})
	}

	return feed.rss2()
})
