import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER PURCHASE TASK SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskSchema = z.object({
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
  measureUnitId: z.string(),
  plannerPurchaseId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerPurchaseTask = z.infer<typeof PlannerPurchaseTaskSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskPartialSchema = PlannerPurchaseTaskSchema.partial();

export type PlannerPurchaseTaskPartial = z.infer<typeof PlannerPurchaseTaskPartialSchema>;

/////////////////////////////////////////
// PLANNER PURCHASE TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerPurchaseTaskOptionalDefaultsSchema = PlannerPurchaseTaskSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerPurchaseTaskOptionalDefaults = z.infer<typeof PlannerPurchaseTaskOptionalDefaultsSchema>;

export default PlannerPurchaseTaskSchema;
