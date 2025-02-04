import { z } from 'zod';

export const BudgetSheetStatusSchema = z.enum(['Created', 'Canceled', 'Sent', 'Approved', 'Rejected']);

export type BudgetSheetStatusType = `${z.infer<typeof BudgetSheetStatusSchema>}`;

export default BudgetSheetStatusSchema;
