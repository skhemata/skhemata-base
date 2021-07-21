/* eslint-disable no-case-declarations */
/**
 *
 * Custom date formats
 * dateFormat ('MMMM DD, YYYY' | 'MM DD, YYYY')
 *
 */
export const customDateFormat = (dateData: any, dateFormat: string) => {
  const d = new Date(dateData);
  const year = d.getFullYear();
  const date = d.getDate();
  const monthIndex = d.getMonth();

  // Different date formatting can be added here
  switch (dateFormat) {
    case 'MMMM DD, YYYY':
      const monthsFull = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const fullMonthName = monthsFull[monthIndex];

      return `${fullMonthName} ${date}, ${year}`;
    case 'MMM DD, YYYY':
      const monthsShort = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      const shortMonthName = monthsShort[monthIndex];

      return `${shortMonthName} ${date}, ${year}`;
    default:
      return true;
  }
};
