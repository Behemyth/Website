<template>
	<UTimeline
		:items="timelineItems"
	>
		<template #description="{ item }">
			<div v-if="isCareerItem(item.data)">
				<CareerCard
					:job="item.data"
				/>
				<UButton
					v-if="item.data.link"
					:to="item.data.link"
					target="_blank"
					color="primary"
					variant="ghost"
					size="xs"
					trailing-icon="i-mdi-arrow-top-right-bold-box-outline"
				>
					{{ t('portfolio.viewCompany') }}
				</UButton>
			</div>
			<div v-else-if="isAcademicItem(item.data)">
				<AcademicCard
					:academic="item.data"
				/>
				<UButton
					v-if="item.data.link"
					:to="item.data.link"
					target="_blank"
					color="primary"
					variant="ghost"
					size="xs"
					trailing-icon="i-mdi-arrow-top-right-bold-box-outline"
				>
					{{ t('portfolio.viewInstitution') }}
				</UButton>
			</div>
		</template>
	</UTimeline>
</template>

<script setup lang="ts">
import type { CareerCollectionItem, AcademicCollectionItem } from '@nuxt/content';
import { getCareerStartDate } from '../../utils/careerPositions';

const { t } = useI18n();

type CareerTimelineItem = Pick<
	CareerCollectionItem,
	'id' | 'title' | 'path' | 'end_date' | 'link' | 'positions' | 'achievements' | 'location' | 'tags'
>;

type AcademicTimelineItem = Pick<
	AcademicCollectionItem,
	'id' | 'title' | 'path' | 'start_date' | 'end_date' | 'link' | 'degree' | 'location'
>;

type PortfolioTimelineItem = CareerTimelineItem | AcademicTimelineItem;

const { data: portfolioItems } = await useAsyncData('portfolio-timeline', async (): Promise<PortfolioTimelineItem[]> => {
	const [careers, academics] = await Promise.all([
		queryCollection('career')
			.select('id', 'title', 'path', 'end_date', 'link', 'positions', 'achievements', 'location', 'tags')
			.all(),
		queryCollection('academic')
			.select('id', 'title', 'path', 'start_date', 'end_date', 'link', 'degree', 'location')
			.order('start_date', 'DESC')
			.all(),
	]);

	const combined: PortfolioTimelineItem[] = [...careers, ...academics];
	return combined.sort((a, b) => getTimelineStartDate(b).getTime() - getTimelineStartDate(a).getTime());
});

// Transform items into timeline format
const timelineItems = computed(() => (portfolioItems.value ?? []).map(item => {
	const startDate = getTimelineStartDate(item);

	return {
		data: item,
		date: item.end_date
			? `${startDate.getUTCFullYear()} - ${new Date(item.end_date).getUTCFullYear()}`
			: `${startDate.getUTCFullYear()} - ${t('portfolio.present')}`,
		icon: isAcademicItem(item) ? 'i-mdi-school' : 'i-mdi-work',
	};
}));

// Type guard to determine item type
function isCareerItem(item: PortfolioTimelineItem): item is CareerTimelineItem {
	return 'positions' in item;
}

function isAcademicItem(item: PortfolioTimelineItem): item is AcademicTimelineItem {
	return !('positions' in item);
}

function getTimelineStartDate(item: PortfolioTimelineItem): Date {
	return isCareerItem(item) ? getCareerStartDate(item.positions) : new Date(item.start_date);
}
</script>
