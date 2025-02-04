import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// MONTHLY REPORT CONFIG LOG SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  monthlyReportConfigId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type MonthlyReportConfigLog = z.infer<typeof MonthlyReportConfigLogSchema>;

/////////////////////////////////////////
// MONTHLY REPORT CONFIG LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigLogPartialSchema = MonthlyReportConfigLogSchema.partial();

export type MonthlyReportConfigLogPartial = z.infer<typeof MonthlyReportConfigLogPartialSchema>;

/////////////////////////////////////////
// MONTHLY REPORT CONFIG LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigLogOptionalDefaultsSchema = MonthlyReportConfigLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type MonthlyReportConfigLogOptionalDefaults = z.infer<typeof MonthlyReportConfigLogOptionalDefaultsSchema>;

export default MonthlyReportConfigLogSchema;
