import { z } from 'zod';

/////////////////////////////////////////
// PLANNER PURCHASE SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseSchema = z.object({
  id: z.string().cuid(),
  managementAreaCodeReference: z.number().int(),
  directorateCodeReference: z.number().int(),
  costCenterCodeReference: z.number().int(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerPurchase = z.infer<typeof PlannerPurchaseSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPurchasePartialSchema = PlannerPurchaseSchema.partial();

export type PlannerPurchasePartial = z.infer<typeof PlannerPurchasePartialSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseOptionalDefaultsSchema = PlannerPurchaseSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerPurchaseOptionalDefaults = z.infer<typeof PlannerPurchaseOptionalDefaultsSchema>;

export default PlannerPurchaseSchema;
