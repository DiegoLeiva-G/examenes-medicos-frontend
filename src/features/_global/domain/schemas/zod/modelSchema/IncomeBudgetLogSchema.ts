import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// INCOME BUDGET LOG SCHEMA
/////////////////////////////////////////

export const IncomeBudgetLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  incomeBudgetId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type IncomeBudgetLog = z.infer<typeof IncomeBudgetLogSchema>;

/////////////////////////////////////////
// INCOME BUDGET LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const IncomeBudgetLogPartialSchema = IncomeBudgetLogSchema.partial();

export type IncomeBudgetLogPartial = z.infer<typeof IncomeBudgetLogPartialSchema>;

/////////////////////////////////////////
// INCOME BUDGET LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IncomeBudgetLogOptionalDefaultsSchema = IncomeBudgetLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type IncomeBudgetLogOptionalDefaults = z.infer<typeof IncomeBudgetLogOptionalDefaultsSchema>;

export default IncomeBudgetLogSchema;
