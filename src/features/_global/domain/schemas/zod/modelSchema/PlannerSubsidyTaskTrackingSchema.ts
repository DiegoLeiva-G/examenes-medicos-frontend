import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER SUBSIDY TASK TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerSubsidyTaskId: z.string().nullish(),
  plannerSubsidyTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerSubsidyTaskTracking = z.infer<typeof PlannerSubsidyTaskTrackingSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskTrackingPartialSchema = PlannerSubsidyTaskTrackingSchema.partial();

export type PlannerSubsidyTaskTrackingPartial = z.infer<typeof PlannerSubsidyTaskTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskTrackingOptionalDefaultsSchema = PlannerSubsidyTaskTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSubsidyTaskTrackingOptionalDefaults = z.infer<
  typeof PlannerSubsidyTaskTrackingOptionalDefaultsSchema
>;

export default PlannerSubsidyTaskTrackingSchema;
