import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskSchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  plannerOperationalId: z.string(),
  subPlannerOperationalTaskId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerOperationalTask = z.infer<typeof PlannerOperationalTaskSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskPartialSchema = PlannerOperationalTaskSchema.partial();

export type PlannerOperationalTaskPartial = z.infer<typeof PlannerOperationalTaskPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskOptionalDefaultsSchema = PlannerOperationalTaskSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalTaskOptionalDefaults = z.infer<typeof PlannerOperationalTaskOptionalDefaultsSchema>;

export default PlannerOperationalTaskSchema;
