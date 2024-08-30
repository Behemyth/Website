export enum MediaType {
	Movie = 'movie',
	Show = 'tv'
}

export interface Genre {
	id: number
	name: string
}

export type Media = {
	id: number
	title: string
	media_type: MediaType
	genres: Genre[]
	poster_path: string
	backdrop_path: string
}
