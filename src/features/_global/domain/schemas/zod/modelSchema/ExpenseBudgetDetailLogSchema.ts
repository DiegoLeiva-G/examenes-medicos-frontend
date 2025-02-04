import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL LOG SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  expenseBudgetDetailId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type ExpenseBudgetDetailLog = z.infer<typeof ExpenseBudgetDetailLogSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailLogPartialSchema = ExpenseBudgetDetailLogSchema.partial();

export type ExpenseBudgetDetailLogPartial = z.infer<typeof ExpenseBudgetDetailLogPartialSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailLogOptionalDefaultsSchema = ExpenseBudgetDetailLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type ExpenseBudgetDetailLogOptionalDefaults = z.infer<typeof ExpenseBudgetDetailLogOptionalDefaultsSchema>;

export default ExpenseBudgetDetailLogSchema;
