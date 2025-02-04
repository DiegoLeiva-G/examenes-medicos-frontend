import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION LOG SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  accountPlanDescriptionId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type AccountPlanDescriptionLog = z.infer<typeof AccountPlanDescriptionLogSchema>;

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionLogPartialSchema = AccountPlanDescriptionLogSchema.partial();

export type AccountPlanDescriptionLogPartial = z.infer<typeof AccountPlanDescriptionLogPartialSchema>;

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionLogOptionalDefaultsSchema = AccountPlanDescriptionLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type AccountPlanDescriptionLogOptionalDefaults = z.infer<typeof AccountPlanDescriptionLogOptionalDefaultsSchema>;

export default AccountPlanDescriptionLogSchema;
