import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  expectedQuantityGoal: z.number().int(),
  minimumQuantityGoal: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  accountPlanCodeReference: z.string(),
  totalBudgetAmount: z.bigint(),
  approvedBudget: z.bigint().nullish(),
  plannerCouncilorSalaryId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerCouncilorSalaryTask = z.infer<typeof PlannerCouncilorSalaryTaskSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskPartialSchema = PlannerCouncilorSalaryTaskSchema.partial();

export type PlannerCouncilorSalaryTaskPartial = z.infer<typeof PlannerCouncilorSalaryTaskPartialSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryTaskOptionalDefaultsSchema = PlannerCouncilorSalaryTaskSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerCouncilorSalaryTaskOptionalDefaults = z.infer<
  typeof PlannerCouncilorSalaryTaskOptionalDefaultsSchema
>;

export default PlannerCouncilorSalaryTaskSchema;
