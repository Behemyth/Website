<template>
	<BaseContentCard
		:title="career.title"
		:description="currentPositionDescription"
		:to="career.path"
	>
		<UPageFeature
			v-for="position in previousPositions"
			:key="`${position.title}-${position.start_date}`"
			icon="i-mdi-briefcase-outline"
			:description="`${position.title} (${formatCareerPositionPeriod(position, locale, t('portfolio.present'))})`"
		/>

		<UPageFeature
			v-for="achievement in career.achievements"
			:key="achievement"
			icon="i-mdi-check-circle-outline"
			:description="achievement"
			:ui="{ leadingIcon: 'text-green-500' }"
		/>

		<UPageFeature
			v-if="career.location"
			icon="i-mdi-map-marker"
			:description="career.location"
		/>
		<UPageFeature
			v-if="career.tags && career.tags.length"
			icon="i-mdi-code"
		>
			<template #description>
				<div class="flex flex-wrap gap-2">
					<UBadge
						v-for="tech in career.tags"
						:key="tech"
						color="neutral"
						variant="soft"
						size="xs"
					>
						{{ tech }}
					</UBadge>
				</div>
			</template>
		</UPageFeature>
	</BaseContentCard>
</template>

<script setup lang="ts">
import type { CareerPosition } from '../../../shared/types/content';
import { formatCareerPositionPeriod, getCareerPositionPeriods } from '../../utils/careerPositions';

interface Props {
	job: {
		title: string;
		positions: CareerPosition[];
		path: string;
		end_date?: Date;
		achievements?: string[];
		location?: string;
		tags?: string[];
	};
}
const { job: career } = defineProps<Props>();
const { locale, t } = useI18n();

const positionPeriods = computed(() => getCareerPositionPeriods(career.positions, career.end_date));
const currentPosition = computed(() => positionPeriods.value.at(-1)!);
const previousPositions = computed(() => positionPeriods.value.slice(0, -1).reverse());
const currentPositionDescription = computed(() => {
	if (positionPeriods.value.length === 1) return currentPosition.value.title;

	return `${currentPosition.value.title} (${formatCareerPositionPeriod(currentPosition.value, locale.value, t('portfolio.present'))})`;
});
</script>
