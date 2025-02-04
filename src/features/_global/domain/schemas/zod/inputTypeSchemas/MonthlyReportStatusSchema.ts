import { z } from 'zod';

export const MonthlyReportStatusSchema = z.enum(['Draft', 'Sent', 'Rejected', 'Complete']);

export type MonthlyReportStatusType = `${z.infer<typeof MonthlyReportStatusSchema>}`;

export default MonthlyReportStatusSchema;
