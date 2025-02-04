import { z } from 'zod';

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionSchema = z.object({
  id: z.string().cuid(),
  accountCodeReference: z.string(),
  description: z.string().nullish(),
  organizationId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type AccountPlanDescription = z.infer<typeof AccountPlanDescriptionSchema>;

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION PARTIAL SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionPartialSchema = AccountPlanDescriptionSchema.partial();

export type AccountPlanDescriptionPartial = z.infer<typeof AccountPlanDescriptionPartialSchema>;

/////////////////////////////////////////
// ACCOUNT PLAN DESCRIPTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AccountPlanDescriptionOptionalDefaultsSchema = AccountPlanDescriptionSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type AccountPlanDescriptionOptionalDefaults = z.infer<typeof AccountPlanDescriptionOptionalDefaultsSchema>;

export default AccountPlanDescriptionSchema;
