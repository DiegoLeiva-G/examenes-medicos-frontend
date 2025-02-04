import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER PURCHASE LOG SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerPurchaseId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerPurchaseLog = z.infer<typeof PlannerPurchaseLogSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseLogPartialSchema = PlannerPurchaseLogSchema.partial();

export type PlannerPurchaseLogPartial = z.infer<typeof PlannerPurchaseLogPartialSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseLogOptionalDefaultsSchema = PlannerPurchaseLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerPurchaseLogOptionalDefaults = z.infer<typeof PlannerPurchaseLogOptionalDefaultsSchema>;

export default PlannerPurchaseLogSchema;
