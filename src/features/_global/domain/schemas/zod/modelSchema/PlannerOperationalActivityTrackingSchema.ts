import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerOperationalActivityId: z.string().nullish(),
  plannerOperationalActivityId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerOperationalActivityTracking = z.infer<typeof PlannerOperationalActivityTrackingSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityTrackingPartialSchema = PlannerOperationalActivityTrackingSchema.partial();

export type PlannerOperationalActivityTrackingPartial = z.infer<typeof PlannerOperationalActivityTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityTrackingOptionalDefaultsSchema = PlannerOperationalActivityTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalActivityTrackingOptionalDefaults = z.infer<
  typeof PlannerOperationalActivityTrackingOptionalDefaultsSchema
>;

export default PlannerOperationalActivityTrackingSchema;
