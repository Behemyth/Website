import { describe, expect, it } from 'vitest';
import {
	contentFeeds,
	getFeedByKey,
	getFeedForPath,
	getFeedUrl,
} from '../shared/utils/feeds';

describe('content feed registry', () => {
	it('defines the four supported feeds', () => {
		expect(contentFeeds.map(feed => feed.key)).toEqual([
			'blog',
			'photography',
			'review/movie',
			'review/show',
		]);
	});

	it('defines a localized label key for every feed', () => {
		expect(contentFeeds.map(feed => feed.labelKey)).toEqual([
			'feed.blog',
			'feed.photography',
			'feed.movieReviews',
			'feed.showReviews',
		]);
	});

	it.each([
		['/blog', 'blog'],
		['/blog/an-article', 'blog'],
		['/photography', 'photography'],
		['/photography/a-series', 'photography'],
		['/review/movie', 'review/movie'],
		['/review/movie/a-film', 'review/movie'],
		['/review/show', 'review/show'],
		['/review/show/a-series', 'review/show'],
		['/blog/', 'blog'],
		['/blog/an-article?preview=true', 'blog'],
	] as const)('resolves %s to %s', (path, key) => {
		expect(getFeedForPath(path)?.key).toBe(key);
	});

	it.each([
		'/',
		'/about',
		'/contact',
		'/portfolio',
		'/portfolio/project/a-project',
		'/review',
		'/review/moviehouse',
		'/blogroll',
	])('does not resolve %s', (path) => {
		expect(getFeedForPath(path)).toBeUndefined();
	});

	it('looks up feed definitions by endpoint key', () => {
		expect(getFeedByKey('review/movie')?.homePath).toBe('/review/movie');
		expect(getFeedByKey('review')).toBeUndefined();
	});

	it('builds format-specific feed URLs', () => {
		const feed = getFeedByKey('blog')!;

		expect(getFeedUrl(feed, 'xml')).toBe('/feed/blog.xml');
		expect(getFeedUrl(feed, 'atom')).toBe('/feed/blog.atom');
		expect(getFeedUrl(feed, 'json')).toBe('/feed/blog.json');
	});
});
