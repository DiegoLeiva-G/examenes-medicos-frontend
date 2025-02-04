import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER PURCHASE TASK TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerPurchaseTaskId: z.string().nullish(),
  plannerPurchaseTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerPurchaseTaskTracking = z.infer<typeof PlannerPurchaseTaskTrackingSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskTrackingPartialSchema = PlannerPurchaseTaskTrackingSchema.partial();

export type PlannerPurchaseTaskTrackingPartial = z.infer<typeof PlannerPurchaseTaskTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskTrackingOptionalDefaultsSchema = PlannerPurchaseTaskTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerPurchaseTaskTrackingOptionalDefaults = z.infer<
  typeof PlannerPurchaseTaskTrackingOptionalDefaultsSchema
>;

export default PlannerPurchaseTaskTrackingSchema;
