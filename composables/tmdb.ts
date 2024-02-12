import { TMDB_API_URL } from '~/constants/tmdb'

export async function fetchTMDB(url: string) {
	return await $fetch(url, { baseURL: `${TMDB_API_URL}/tmdb` })
}
