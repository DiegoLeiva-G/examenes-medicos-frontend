import { z } from 'zod';
import { PlannerTaskStatusSchema } from '../inputTypeSchemas/PlannerTaskStatusSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivitySchema = z.object({
  status: PlannerTaskStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  expectedQuantityGoal: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  plannerOperationalTaskId: z.string(),
  measureUnitId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PlannerOperationalActivity = z.infer<typeof PlannerOperationalActivitySchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityPartialSchema = PlannerOperationalActivitySchema.partial();

export type PlannerOperationalActivityPartial = z.infer<typeof PlannerOperationalActivityPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityOptionalDefaultsSchema = PlannerOperationalActivitySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalActivityOptionalDefaults = z.infer<
  typeof PlannerOperationalActivityOptionalDefaultsSchema
>;

export default PlannerOperationalActivitySchema;
