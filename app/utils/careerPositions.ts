import type { CareerPosition } from '../../shared/types/content';

export interface CareerPositionPeriod extends CareerPosition {
	end_date?: Date;
}

export function getCareerStartDate(positions: CareerPosition[]): Date {
	return new Date(positions[0].start_date);
}

export function getCareerPositionPeriods(
	positions: CareerPosition[],
	employerEndDate?: Date,
): CareerPositionPeriod[] {
	return positions.map((position, index) => ({
		...position,
		end_date: positions[index + 1]
			? previousUtcDay(positions[index + 1].start_date)
			: employerEndDate ? new Date(employerEndDate) : undefined,
	}));
}

export function formatCareerPositionPeriod(
	period: CareerPositionPeriod,
	locale: string,
	presentLabel: string,
): string {
	const formatter = new Intl.DateTimeFormat(locale, {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	});
	const end = period.end_date ? formatter.format(new Date(period.end_date)) : presentLabel;

	return `${formatter.format(new Date(period.start_date))} - ${end}`;
}

function previousUtcDay(date: Date): Date {
	const previousDay = new Date(date);
	previousDay.setUTCDate(previousDay.getUTCDate() - 1);
	return previousDay;
}
