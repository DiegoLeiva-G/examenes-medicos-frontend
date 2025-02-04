import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK LOG SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerCouncilorSalaryTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerCouncilorSalaryTaskLog = z.infer<typeof PlannerCouncilorSalaryTaskLogSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskLogPartialSchema = PlannerCouncilorSalaryTaskLogSchema.partial();

export type PlannerCouncilorSalaryTaskLogPartial = z.infer<typeof PlannerCouncilorSalaryTaskLogPartialSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskLogOptionalDefaultsSchema = PlannerCouncilorSalaryTaskLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerCouncilorSalaryTaskLogOptionalDefaults = z.infer<
  typeof PlannerCouncilorSalaryTaskLogOptionalDefaultsSchema
>;

export default PlannerCouncilorSalaryTaskLogSchema;
