import { z } from 'zod';
import { MonthSchema } from '../inputTypeSchemas/MonthSchema';

/////////////////////////////////////////
// MONTHLY REPORT SCHEMA
/////////////////////////////////////////

export const MonthlyReportSchema = z.object({
  month: MonthSchema.nullish(),
  id: z.string().cuid(),
  internalId: z.number().int(),
  year: z.number().int().nullish(),
  date: z.coerce.date().nullish(),
  labors: z.string().nullish(),
  directorateCodeReference: z.number().int().nullish(),
  costCenterCodeReference: z.number().int().array(),
  contractStartDate: z.coerce.date().nullish(),
  contractEndDate: z.coerce.date().nullish(),
  decreeNumber: z.number().int().nullish(),
  detail: z.string().nullish(),
  honoraryTicketUrl: z.string().nullish(),
  employeeId: z.string().nullish(),
  departmentId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type MonthlyReport = z.infer<typeof MonthlyReportSchema>;

/////////////////////////////////////////
// MONTHLY REPORT PARTIAL SCHEMA
/////////////////////////////////////////

export const MonthlyReportPartialSchema = MonthlyReportSchema.partial();

export type MonthlyReportPartial = z.infer<typeof MonthlyReportPartialSchema>;

/////////////////////////////////////////
// MONTHLY REPORT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MonthlyReportOptionalDefaultsSchema = MonthlyReportSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    internalId: z.number().int().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type MonthlyReportOptionalDefaults = z.infer<typeof MonthlyReportOptionalDefaultsSchema>;

export default MonthlyReportSchema;
