import { z } from 'zod';
import { MonthlyReportStatusSchema } from '../inputTypeSchemas/MonthlyReportStatusSchema';

/////////////////////////////////////////
// MONTHLY REPORT TRACKING SCHEMA
/////////////////////////////////////////

export const MonthlyReportTrackingSchema = z.object({
  status: MonthlyReportStatusSchema.nullish(),
  id: z.string().cuid(),
  observation: z.string().nullish(),
  currentMonthlyReportId: z.string().nullish(),
  monthlyReportId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type MonthlyReportTracking = z.infer<typeof MonthlyReportTrackingSchema>;

/////////////////////////////////////////
// MONTHLY REPORT TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const MonthlyReportTrackingPartialSchema = MonthlyReportTrackingSchema.partial();

export type MonthlyReportTrackingPartial = z.infer<typeof MonthlyReportTrackingPartialSchema>;

/////////////////////////////////////////
// MONTHLY REPORT TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MonthlyReportTrackingOptionalDefaultsSchema = MonthlyReportTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type MonthlyReportTrackingOptionalDefaults = z.infer<typeof MonthlyReportTrackingOptionalDefaultsSchema>;

export default MonthlyReportTrackingSchema;
