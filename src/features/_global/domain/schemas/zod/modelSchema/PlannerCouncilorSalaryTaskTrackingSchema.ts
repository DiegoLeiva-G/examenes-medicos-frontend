import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK TRACKING SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskTrackingSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  currentPlannerCouncilorSalaryTaskId: z.string().nullish(),
  plannerCouncilorSalaryTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerCouncilorSalaryTaskTracking = z.infer<typeof PlannerCouncilorSalaryTaskTrackingSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskTrackingPartialSchema = PlannerCouncilorSalaryTaskTrackingSchema.partial();

export type PlannerCouncilorSalaryTaskTrackingPartial = z.infer<typeof PlannerCouncilorSalaryTaskTrackingPartialSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskTrackingOptionalDefaultsSchema = PlannerCouncilorSalaryTaskTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerCouncilorSalaryTaskTrackingOptionalDefaults = z.infer<
  typeof PlannerCouncilorSalaryTaskTrackingOptionalDefaultsSchema
>;

export default PlannerCouncilorSalaryTaskTrackingSchema;
