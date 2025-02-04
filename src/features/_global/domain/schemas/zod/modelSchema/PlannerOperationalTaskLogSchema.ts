import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK LOG SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerOperationalTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerOperationalTaskLog = z.infer<typeof PlannerOperationalTaskLogSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskLogPartialSchema = PlannerOperationalTaskLogSchema.partial();

export type PlannerOperationalTaskLogPartial = z.infer<typeof PlannerOperationalTaskLogPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL TASK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalTaskLogOptionalDefaultsSchema = PlannerOperationalTaskLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalTaskLogOptionalDefaults = z.infer<typeof PlannerOperationalTaskLogOptionalDefaultsSchema>;

export default PlannerOperationalTaskLogSchema;
