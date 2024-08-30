import type { Media, MediaType } from 'types/tmdb'

export function GetMedia(type: MediaType, id: number) : Media{
    const { data } = useFetch(`/api/tmdb/media/${type}/${id}`)

    if(data.value == undefined){
        throw new Error('Failed to fetch media')
    }

    return {
        id: data.value.id,
        title: data.value.name || data.value.title,
        media_type: data.value.media_type,
        genres: data.value.genres,
        poster_path: data.value.poster_path,
        backdrop_path: data.value.backdrop_path
    }
}