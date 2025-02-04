import { z } from 'zod';
import { MonthSchema } from '../inputTypeSchemas/MonthSchema';

/////////////////////////////////////////
// MONTHLY REPORT CONFIG SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigSchema = z.object({
  month: MonthSchema.nullish(),
  id: z.string().cuid(),
  year: z.number().int().nullish(),
  endLimitDay: z.number().int().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type MonthlyReportConfig = z.infer<typeof MonthlyReportConfigSchema>;

/////////////////////////////////////////
// MONTHLY REPORT CONFIG PARTIAL SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigPartialSchema = MonthlyReportConfigSchema.partial();

export type MonthlyReportConfigPartial = z.infer<typeof MonthlyReportConfigPartialSchema>;

/////////////////////////////////////////
// MONTHLY REPORT CONFIG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MonthlyReportConfigOptionalDefaultsSchema = MonthlyReportConfigSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type MonthlyReportConfigOptionalDefaults = z.infer<typeof MonthlyReportConfigOptionalDefaultsSchema>;

export default MonthlyReportConfigSchema;
