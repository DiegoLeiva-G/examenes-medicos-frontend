import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailSchema = z.object({
  id: z.string().cuid(),
  accountCode: z.string(),
  accountName: z.string(),
  amount: z.bigint(),
  costCenterReferenceCode: z.number().int(),
  expenseBudgetId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ExpenseBudgetDetail = z.infer<typeof ExpenseBudgetDetailSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailPartialSchema = ExpenseBudgetDetailSchema.partial();

export type ExpenseBudgetDetailPartial = z.infer<typeof ExpenseBudgetDetailPartialSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetDetailOptionalDefaultsSchema = ExpenseBudgetDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type ExpenseBudgetDetailOptionalDefaults = z.infer<typeof ExpenseBudgetDetailOptionalDefaultsSchema>;

export default ExpenseBudgetDetailSchema;
