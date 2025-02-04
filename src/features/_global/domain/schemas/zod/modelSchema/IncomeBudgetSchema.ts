import { z } from 'zod';

/////////////////////////////////////////
// INCOME BUDGET SCHEMA
/////////////////////////////////////////

export const IncomeBudgetSchema = z.object({
  id: z.string().cuid(),
  year: z.number().int(),
  managementAreaReferenceCode: z.number().int(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type IncomeBudget = z.infer<typeof IncomeBudgetSchema>;

/////////////////////////////////////////
// INCOME BUDGET PARTIAL SCHEMA
/////////////////////////////////////////

export const IncomeBudgetPartialSchema = IncomeBudgetSchema.partial();

export type IncomeBudgetPartial = z.infer<typeof IncomeBudgetPartialSchema>;

/////////////////////////////////////////
// INCOME BUDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IncomeBudgetOptionalDefaultsSchema = IncomeBudgetSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    managementAreaReferenceCode: z.number().int().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type IncomeBudgetOptionalDefaults = z.infer<typeof IncomeBudgetOptionalDefaultsSchema>;

export default IncomeBudgetSchema;
