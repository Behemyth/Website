import type { NuxtContent } from 'types/content'

export interface NuxtContentReview extends NuxtContent {
	intRating: number,
	entRating: number,
	rating: number
}
