import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

// export default defineEventHandler(async (event) => {
// 	const reviews = new Feed({
// 		title: 'Movie and Show Reviews',
// 		description: 'Movie and show reviews by Asher Norland',
// 		id: 'reviews',
// 		link: 'https://ashernorland.com/reviews',
// 		language: 'en',
// 		image: ,
// 		favicon: 'http://ashernorland.com/favicon.ico',
// 		copyright: 'Copyright © ' + new Date().getFullYear() + ' Asher Norland',
// 		feedLinks: {
// 			rss: 'https://ashernorland.com/rss'
// 		},
// 		author: {
// 			name: 'Asher Norland',
// 			email: 'asher.norland@gmail.com',
// 			link: 'https://ashernorland.com/contact'
// 		}
// 	})

// 	const movies = new Feed({
// 		title: 'Movie Reviews',
// 		description: 'Movie reviews by Asher Norland',
// 		id: 'movie-reviews',
// 		link: 'https://ashernorland.com/reviews/movie',
// 		language: 'en',
// 		image: ,
// 		favicon: 'http://ashernorland.com/favicon.ico',
// 		copyright: 'Copyright © ' + new Date().getFullYear() + ' Asher Norland',
// 		feedLinks: {
// 			rss: 'https://ashernorland.com/rss'
// 		},
// 		author: {
// 			name: 'Asher Norland',
// 			email: 'asher.norland@gmail.com',
// 			link: 'https://ashernorland.com/contact'
// 		}
// 	})

// 	const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
// 	const posts = docs.filter(doc => doc?._path?.includes('/blog'))

// 	for (const post of posts) {
// 		movies.addItem({
// 			title: ,
// 			id: ,
// 			link: ,
// 			description: ,
// 			content: ,
// 			author: [
// 				{
// 					name: 'Asher Norland',
// 					email: 'asher.norland@gmail.com',
// 					link: 'https://ashernorland.com/contact'
// 				}
// 			],
// 			date: ,
// 			image:
// 		})
// 	}

// 	return movies.rss2()
// })
