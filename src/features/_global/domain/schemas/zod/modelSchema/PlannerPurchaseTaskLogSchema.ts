import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER PURCHASE TASK LOG SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerPurchaseTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerPurchaseTaskLog = z.infer<typeof PlannerPurchaseTaskLogSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskLogPartialSchema = PlannerPurchaseTaskLogSchema.partial();

export type PlannerPurchaseTaskLogPartial = z.infer<typeof PlannerPurchaseTaskLogPartialSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskLogOptionalDefaultsSchema = PlannerPurchaseTaskLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerPurchaseTaskLogOptionalDefaults = z.infer<typeof PlannerPurchaseTaskLogOptionalDefaultsSchema>;

export default PlannerPurchaseTaskLogSchema;
