import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER SUBSIDY TASK SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskSchema = z.object({
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
  plannerSubsidyId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerSubsidyTask = z.infer<typeof PlannerSubsidyTaskSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskPartialSchema = PlannerSubsidyTaskSchema.partial();

export type PlannerSubsidyTaskPartial = z.infer<typeof PlannerSubsidyTaskPartialSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskOptionalDefaultsSchema = PlannerSubsidyTaskSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerSubsidyTaskOptionalDefaults = z.infer<typeof PlannerSubsidyTaskOptionalDefaultsSchema>;

export default PlannerSubsidyTaskSchema;
