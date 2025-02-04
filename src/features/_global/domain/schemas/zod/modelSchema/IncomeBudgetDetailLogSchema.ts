import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// INCOME BUDGET DETAIL LOG SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  incomeBudgetDetailId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type IncomeBudgetDetailLog = z.infer<typeof IncomeBudgetDetailLogSchema>;

/////////////////////////////////////////
// INCOME BUDGET DETAIL LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailLogPartialSchema = IncomeBudgetDetailLogSchema.partial();

export type IncomeBudgetDetailLogPartial = z.infer<typeof IncomeBudgetDetailLogPartialSchema>;

/////////////////////////////////////////
// INCOME BUDGET DETAIL LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IncomeBudgetDetailLogOptionalDefaultsSchema = IncomeBudgetDetailLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type IncomeBudgetDetailLogOptionalDefaults = z.infer<typeof IncomeBudgetDetailLogOptionalDefaultsSchema>;

export default IncomeBudgetDetailLogSchema;
