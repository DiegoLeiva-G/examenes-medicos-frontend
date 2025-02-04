import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER HIRING TASK TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerHiringTaskId: z.string().nullish(),
  plannerHiringTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerHiringTaskTracking = z.infer<typeof PlannerHiringTaskTrackingSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskTrackingPartialSchema = PlannerHiringTaskTrackingSchema.partial();

export type PlannerHiringTaskTrackingPartial = z.infer<typeof PlannerHiringTaskTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskTrackingOptionalDefaultsSchema = PlannerHiringTaskTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerHiringTaskTrackingOptionalDefaults = z.infer<typeof PlannerHiringTaskTrackingOptionalDefaultsSchema>;

export default PlannerHiringTaskTrackingSchema;
