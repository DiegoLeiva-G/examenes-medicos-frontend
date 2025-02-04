import { z } from 'zod';

export const MonthlyReportConfigLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'monthlyReportConfigId',
  'userId',
  'createdAt',
]);

export default MonthlyReportConfigLogScalarFieldEnumSchema;
