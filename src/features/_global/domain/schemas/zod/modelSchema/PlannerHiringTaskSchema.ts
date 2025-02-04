import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER HIRING TASK SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskSchema = z.object({
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
  plannerHiringId: z.string().nullish(),
  plannerSpecialHiringId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerHiringTask = z.infer<typeof PlannerHiringTaskSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskPartialSchema = PlannerHiringTaskSchema.partial();

export type PlannerHiringTaskPartial = z.infer<typeof PlannerHiringTaskPartialSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskOptionalDefaultsSchema = PlannerHiringTaskSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerHiringTaskOptionalDefaults = z.infer<typeof PlannerHiringTaskOptionalDefaultsSchema>;

export default PlannerHiringTaskSchema;
