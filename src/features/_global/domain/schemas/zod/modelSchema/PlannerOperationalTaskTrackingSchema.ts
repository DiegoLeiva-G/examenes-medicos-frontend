import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerOperationalTaskId: z.string().nullish(),
  plannerOperationalTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerOperationalTaskTracking = z.infer<typeof PlannerOperationalTaskTrackingSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskTrackingPartialSchema = PlannerOperationalTaskTrackingSchema.partial();

export type PlannerOperationalTaskTrackingPartial = z.infer<typeof PlannerOperationalTaskTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskTrackingOptionalDefaultsSchema = PlannerOperationalTaskTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalTaskTrackingOptionalDefaults = z.infer<
  typeof PlannerOperationalTaskTrackingOptionalDefaultsSchema
>;

export default PlannerOperationalTaskTrackingSchema;
