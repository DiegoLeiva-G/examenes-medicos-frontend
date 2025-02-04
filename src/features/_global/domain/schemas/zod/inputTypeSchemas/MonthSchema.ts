import { z } from 'zod';

export const MonthSchema = z.enum([
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
]);

export type MonthType = `${z.infer<typeof MonthSchema>}`;

export default MonthSchema;
