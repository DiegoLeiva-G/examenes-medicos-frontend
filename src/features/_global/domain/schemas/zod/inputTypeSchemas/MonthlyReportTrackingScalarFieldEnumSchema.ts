import { z } from 'zod';

export const MonthlyReportTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'observation',
  'currentMonthlyReportId',
  'monthlyReportId',
  'userId',
  'createdAt',
]);

export default MonthlyReportTrackingScalarFieldEnumSchema;
