import type { NuxtContent } from '@schema/content'

export type Movie = {
	id: number
	title: string
	genres: {
		id: number
		name: string
	}[]
	release_date: string
	runtime: number | null
	overview: string
	poster_path: string
	backdrop_path: string
}

export interface NuxtContentReview extends NuxtContent {
	intRating: number,
	entRating: number,
	rating: number
}
