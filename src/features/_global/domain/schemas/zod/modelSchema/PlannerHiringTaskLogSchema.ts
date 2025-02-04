import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER HIRING TASK LOG SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerHiringTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerHiringTaskLog = z.infer<typeof PlannerHiringTaskLogSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskLogPartialSchema = PlannerHiringTaskLogSchema.partial();

export type PlannerHiringTaskLogPartial = z.infer<typeof PlannerHiringTaskLogPartialSchema>;

/////////////////////////////////////////
// PLANNER HIRING TASK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerHiringTaskLogOptionalDefaultsSchema = PlannerHiringTaskLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerHiringTaskLogOptionalDefaults = z.infer<typeof PlannerHiringTaskLogOptionalDefaultsSchema>;

export default PlannerHiringTaskLogSchema;
