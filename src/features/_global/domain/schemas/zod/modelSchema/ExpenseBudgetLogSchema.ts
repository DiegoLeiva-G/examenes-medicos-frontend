import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// EXPENSE BUDGET LOG SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  expenseBudgetId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type ExpenseBudgetLog = z.infer<typeof ExpenseBudgetLogSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetLogPartialSchema = ExpenseBudgetLogSchema.partial();

export type ExpenseBudgetLogPartial = z.infer<typeof ExpenseBudgetLogPartialSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetLogOptionalDefaultsSchema = ExpenseBudgetLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type ExpenseBudgetLogOptionalDefaults = z.infer<typeof ExpenseBudgetLogOptionalDefaultsSchema>;

export default ExpenseBudgetLogSchema;
