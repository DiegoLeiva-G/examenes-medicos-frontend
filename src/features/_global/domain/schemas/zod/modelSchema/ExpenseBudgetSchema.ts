import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE BUDGET SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetSchema = z.object({
  id: z.string().cuid(),
  year: z.number().int(),
  managementAreaReferenceCode: z.number().int(),
  directorateReferenceCode: z.number().int(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ExpenseBudget = z.infer<typeof ExpenseBudgetSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET PARTIAL SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetPartialSchema = ExpenseBudgetSchema.partial();

export type ExpenseBudgetPartial = z.infer<typeof ExpenseBudgetPartialSchema>;

/////////////////////////////////////////
// EXPENSE BUDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExpenseBudgetOptionalDefaultsSchema = ExpenseBudgetSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    managementAreaReferenceCode: z.number().int().optional(),
    directorateReferenceCode: z.number().int().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type ExpenseBudgetOptionalDefaults = z.infer<typeof ExpenseBudgetOptionalDefaultsSchema>;

export default ExpenseBudgetSchema;
