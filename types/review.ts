export enum MediaType {
	Movie = 'movie',
	Show = 'show'
}

export interface ReviewMetadata {
	intRating: number,
	entRating: number,
	rating: number
	path: string
	title: string
	description: string
	TMDB_ID: number
}
