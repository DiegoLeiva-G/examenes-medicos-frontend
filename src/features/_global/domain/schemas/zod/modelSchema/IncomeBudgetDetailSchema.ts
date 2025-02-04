import { z } from 'zod';

/////////////////////////////////////////
// INCOME BUDGET DETAIL SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailSchema = z.object({
  id: z.string().cuid(),
  accountCode: z.string(),
  accountName: z.string(),
  amount: z.bigint(),
  incomeBudgetId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type IncomeBudgetDetail = z.infer<typeof IncomeBudgetDetailSchema>;

/////////////////////////////////////////
// INCOME BUDGET DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailPartialSchema = IncomeBudgetDetailSchema.partial();

export type IncomeBudgetDetailPartial = z.infer<typeof IncomeBudgetDetailPartialSchema>;

/////////////////////////////////////////
// INCOME BUDGET DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailOptionalDefaultsSchema = IncomeBudgetDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type IncomeBudgetDetailOptionalDefaults = z.infer<typeof IncomeBudgetDetailOptionalDefaultsSchema>;

export default IncomeBudgetDetailSchema;
