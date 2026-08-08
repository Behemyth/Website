import { describe, expect, it } from 'vitest';
import { DEFAULT_PAGE_SIZE, getPageState, parsePage } from '../app/composables/usePagination';

describe('parsePage', () => {
	it('accepts one-based integer query values only', () => {
		expect(parsePage('2')).toBe(2);
		expect(parsePage(['3', '4'])).toBe(3);
		expect(parsePage('1.5')).toBe(1);
		expect(parsePage('0')).toBe(1);
		expect(parsePage('-1')).toBe(1);
		expect(parsePage(undefined)).toBe(1);
	});
});

describe('getPageState', () => {
	it('calculates complete rows for every supported grid size', () => {
		expect(DEFAULT_PAGE_SIZE).toBe(30);
		expect([2, 3, 6].every(columns => DEFAULT_PAGE_SIZE % columns === 0)).toBe(true);
		expect(getPageState(91, 2)).toEqual({ page: 2, totalPages: 4, offset: 30 });
		expect(getPageState(31, 9)).toEqual({ page: 2, totalPages: 2, offset: 30 });
		expect(getPageState(0, 5)).toEqual({ page: 1, totalPages: 1, offset: 0 });
	});
});
