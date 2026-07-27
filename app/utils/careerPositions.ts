import type { CareerPosition } from '../../shared/types/content';

export type CareerPositionInput = Omit<CareerPosition, 'start_date'> & {
	start_date: CareerPosition['start_date'] | string;
};

export interface CareerPositionPeriod {
	title: string;
	start_date: Date;
	end_date?: Date;
}

export function getCareerStartDate(positions: CareerPositionInput[]): Date {
	return new Date(positions[0]!.start_date);
}

export function getCareerPositionPeriods(
	positions: CareerPositionInput[],
	employerEndDate?: Date | string,
): CareerPositionPeriod[] {
	return positions.map((position, index) => ({
		title: position.title,
		start_date: new Date(position.start_date),
		end_date: positions[index + 1]
			? previousUtcDay(positions[index + 1]!.start_date)
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

function previousUtcDay(date: Date | string): Date {
	const previousDay = new Date(date);
	previousDay.setUTCDate(previousDay.getUTCDate() - 1);
	return previousDay;
}
