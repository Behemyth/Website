<template>
	<div class="flex flex-col gap-6">
		<div class="flex flex-wrap items-end gap-x-3 gap-y-4 border-b border-default pb-5">
			<UFormField :label="$t('filter.genre')">
				<USelectMenu
					v-model="selectedGenres"
					:items="availableGenres"
					:placeholder="$t('filter.allGenres')"
					multiple
					:search-input="false"
					class="w-44"
				/>
			</UFormField>

			<UFormField :label="$t('filter.year')">
				<USelectMenu
					v-model="selectedYears"
					:items="availableYears"
					:placeholder="$t('filter.allYears')"
					multiple
					:search-input="false"
					class="w-36"
				/>
			</UFormField>

			<UFormField :label="$t('filter.person')">
				<USelectMenu
					v-model="selectedPeople"
					:items="availablePeople"
					:placeholder="$t('filter.allPeople')"
					multiple
					virtualize
					class="w-52"
				/>
			</UFormField>

			<UFormField :label="$t('filter.minRating')">
				<USelect
					v-model="selectedMinRating"
					:items="ratingOptions"
					:placeholder="$t('filter.any')"
					class="w-32"
				/>
			</UFormField>

			<UFormField :label="$t('filter.sortBy')">
				<USelect
					v-model="sortBy"
					:items="sortOptions"
					class="w-40"
				/>
			</UFormField>

			<UButton
				v-if="hasActiveFilters"
				variant="ghost"
				color="neutral"
				size="sm"
				icon="i-mdi-filter-off"
				@click="clearFilters"
			>
				{{ $t('filter.clearFilters') }}
			</UButton>
		</div>

		<p
			v-if="items?.length"
			class="text-sm text-muted tabular-nums"
		>
			{{ $t('filter.showing', { filtered: visibleCount, total: items.length }) }}
		</p>

		<div>
			<div
				v-if="reviews.length"
				class="grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
			>
				<div
					v-for="review in reviews"
					:key="review.id"
				>
					<LazyReviewCard
						:title="review.title"
						:path="review.path"
						:rating="Number(review.rating)"
						:poster-path="review.poster_path ?? ''"
						:season-number="'season_number' in review && review.season_number != null ? Number(review.season_number) : undefined"
					/>
				</div>
			</div>

			<div
				v-else-if="items?.length && visibleCount === 0"
				class="flex flex-col items-center gap-4 py-12"
			>
				<UIcon
					name="i-mdi-movie-filter-outline"
					class="text-muted size-12"
				/>
				<p class="text-muted text-center">
					{{ $t('filter.noMatch') }}
				</p>
				<UButton
					v-if="hasActiveFilters"
					variant="outline"
					size="sm"
					icon="i-mdi-filter-off"
					@click="clearFilters"
				>
					{{ $t('filter.clearFilters') }}
				</UButton>
			</div>
		</div>

		<div
			v-if="totalPages > 1"
			class="flex justify-center border-t border-default pt-5"
		>
			<UPagination
				:page="page"
				:total="total"
				:items-per-page="pageSize"
				:sibling-count="1"
				:to="to"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { FilterableReview } from '~/composables/useReviewFilters';

const { t } = useI18n();
const props = defineProps<{
	collection: 'movie' | 'show';
}>();

const { polite: announce } = useAnnouncer();

const { data: items } = await useAsyncData(`review-grid-filter-${props.collection}`, async (): Promise<FilterableReview[]> => {
	if (props.collection === 'show') {
		const rows = await queryCollection('show')
			.select('id', 'title', 'path', 'rating', 'poster_path', 'date_published', 'season_number', 'genres', 'people', 'release_year')
			.order('date_published', 'DESC')
			.all();
		return rows as unknown as FilterableReview[];
	}
	const rows = await queryCollection('movie')
		.select('id', 'title', 'path', 'rating', 'poster_path', 'date_published', 'genres', 'people', 'release_year')
		.order('date_published', 'DESC')
		.all();
	return rows as unknown as FilterableReview[];
});

const {
	selectedGenres,
	selectedYears,
	selectedPeople,
	selectedMinRating,
	sortBy,
	availableGenres,
	availableYears,
	availablePeople,
	hasActiveFilters,
	clearFilters,
	sortedItems,
	visibleIds,
	visibleCount,
} = useReviewFilters(items);

const filteredReviews = computed(() => sortedItems.value.filter(review => visibleIds.value.has(review.id)));
const { items: reviews, page, total, totalPages, pageSize, to } = usePagination(filteredReviews);

const ratingOptions = [
	{ label: '★★★★', value: '8' },
	{ label: '★★★½', value: '7' },
	{ label: '★★★', value: '6' },
	{ label: '★★½', value: '5' },
	{ label: '★★', value: '4' },
	{ label: '★½', value: '3' },
	{ label: '★', value: '2' },
	{ label: '½', value: '1' },
];

const sortOptions = computed(() => [
	{ label: t('filter.dateReviewed'), value: 'date' },
	{ label: t('filter.rating'), value: 'rating' },
	{ label: t('filter.title'), value: 'title' },
	{ label: t('filter.releaseYear'), value: 'year' },
]);

watch(visibleCount, count => announce(t('filter.announcerShowing', { count })));
</script>
