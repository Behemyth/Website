export default defineEventHandler(async (event) => {
	const id = event.context.params!.id
	const config = useRuntimeConfig(event)

	if (!config.apiSecret) { throw new Error('TMDB API key is missing') }
	if (!config.public.apiBase) { throw new Error('TMDB API URL is missing') }

	try {
		return await $fetch(`/movie/${id}`, {
			baseURL: `${config.public.apiBase}`,
			params: {
				language: 'en-US'
			},
			headers: {
				Authorization: `Bearer ${config.apiSecret}`
			}
		})
	} catch (error: any) {
		const status = error?.response?.status || 500
		setResponseStatus(event, status)
		return {
			error: String(error)?.replace(config.apiSecret, '***')
		}
	}
})
