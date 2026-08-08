<template>
	<BaseContentCard
		:title="career.title"
		:description="currentPosition.title"
		:to="career.path"
	>
		<template
			v-if="positionPeriods.length > 1"
			#description
		>
			<div class="space-y-0.5">
				<div>{{ currentPosition.title }}</div>
				<div class="text-xs text-muted">
					{{ formatCareerPositionPeriod(currentPosition, locale, t('portfolio.present')) }}
				</div>
			</div>
		</template>

		<UPageFeature
			v-for="position in previousPositions"
			:key="`${position.title}-${position.start_date}`"
			icon="i-mdi-briefcase-outline"
		>
			<template #description>
				<div class="space-y-0.5">
					<div>{{ position.title }}</div>
					<div class="text-xs text-muted">
						{{ formatCareerPositionPeriod(position, locale, t('portfolio.present')) }}
					</div>
				</div>
			</template>
		</UPageFeature>

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
import type { CareerPositionInput } from '../../utils/careerPositions';
import { formatCareerPositionPeriod, getCareerPositionPeriods } from '../../utils/careerPositions';

interface Props {
	job: {
		title: string;
		positions: CareerPositionInput[];
		path: string;
		end_date?: Date | string;
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
</script>
