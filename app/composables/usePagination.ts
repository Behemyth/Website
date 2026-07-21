import type { ComputedRef } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const DEFAULT_PAGE_SIZE = 30;

export function parsePage(value: unknown): number {
	const candidate = Array.isArray(value) ? value[0] : value;
	if (typeof candidate !== 'string' || !/^[1-9]\d*$/.test(candidate)) return 1;
	const page = Number(candidate);
	return Number.isSafeInteger(page) ? page : 1;
}

export function getPageState(total: number, requestedPage: number, pageSize = DEFAULT_PAGE_SIZE) {
	const totalPages = Math.max(1, Math.ceil(total / pageSize));
	const page = Math.min(Math.max(1, requestedPage), totalPages);
	return { page, totalPages, offset: (page - 1) * pageSize };
}

export function usePagination<T>(source: ComputedRef<readonly T[]>, pageSize = DEFAULT_PAGE_SIZE) {
	const route = useRoute();
	const total = computed(() => source.value.length);
	const state = computed(() => getPageState(total.value, parsePage(route.query.page), pageSize));
	const items = computed(() => source.value.slice(state.value.offset, state.value.offset + pageSize));

	function to(page: number): RouteLocationRaw {
		const query = { ...route.query };
		delete query.page;
		if (page > 1) query.page = String(page);
		return { path: route.path, query };
	}

	return {
		items,
		page: computed(() => state.value.page),
		total,
		totalPages: computed(() => state.value.totalPages),
		pageSize,
		to,
	};
}
