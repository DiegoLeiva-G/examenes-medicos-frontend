import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';
import { BudgetSheetStatusSchema } from '../inputTypeSchemas/BudgetSheetStatusSchema';

/////////////////////////////////////////
// BUDGET SHEET LOG SCHEMA
/////////////////////////////////////////

export const BudgetSheetLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  status: BudgetSheetStatusSchema,
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  budgetSheetId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type BudgetSheetLog = z.infer<typeof BudgetSheetLogSchema>;

/////////////////////////////////////////
// BUDGET SHEET LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const BudgetSheetLogPartialSchema = BudgetSheetLogSchema.partial();

export type BudgetSheetLogPartial = z.infer<typeof BudgetSheetLogPartialSchema>;

/////////////////////////////////////////
// BUDGET SHEET LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BudgetSheetLogOptionalDefaultsSchema = BudgetSheetLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type BudgetSheetLogOptionalDefaults = z.infer<typeof BudgetSheetLogOptionalDefaultsSchema>;

export default BudgetSheetLogSchema;
