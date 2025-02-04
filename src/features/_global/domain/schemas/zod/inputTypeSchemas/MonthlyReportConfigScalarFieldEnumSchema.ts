import { z } from 'zod';

export const MonthlyReportConfigScalarFieldEnumSchema = z.enum([
  'id',
  'year',
  'month',
  'endLimitDay',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default MonthlyReportConfigScalarFieldEnumSchema;
