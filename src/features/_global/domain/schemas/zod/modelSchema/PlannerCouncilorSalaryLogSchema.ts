import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY LOG SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerCouncilorSalaryId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerCouncilorSalaryLog = z.infer<typeof PlannerCouncilorSalaryLogSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryLogPartialSchema = PlannerCouncilorSalaryLogSchema.partial();

export type PlannerCouncilorSalaryLogPartial = z.infer<typeof PlannerCouncilorSalaryLogPartialSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryLogOptionalDefaultsSchema = PlannerCouncilorSalaryLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerCouncilorSalaryLogOptionalDefaults = z.infer<typeof PlannerCouncilorSalaryLogOptionalDefaultsSchema>;

export default PlannerCouncilorSalaryLogSchema;
