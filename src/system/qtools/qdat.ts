/**
 * Get short date with day of week, in American format. 
 *
 * qdat.getShortAmericanDateWithDayOfWeek('2021-08-20') 
 *
 * "Fri, Aug 20, 2021"
 */
export const getShortAmericanDateWithDay = (isoDate: string) => {
	const date = new Date(isoDate);
	return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Get short month-day in American format.
 *
 * qdat.getShortAmericanDateWithDayOfWeek('Aug 20') 
 *
 * "Fri, Aug 20, 2021"
 */
export const getShortAmericanMonthDay = (isoDate: string) => {
	const date = new Date(isoDate);
	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}