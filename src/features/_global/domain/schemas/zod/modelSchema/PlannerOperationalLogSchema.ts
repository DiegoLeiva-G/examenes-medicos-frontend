import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL LOG SCHEMA
/////////////////////////////////////////

export const PlannerOperationalLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerOperationalId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerOperationalLog = z.infer<typeof PlannerOperationalLogSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalLogPartialSchema = PlannerOperationalLogSchema.partial();

export type PlannerOperationalLogPartial = z.infer<typeof PlannerOperationalLogPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalLogOptionalDefaultsSchema = PlannerOperationalLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalLogOptionalDefaults = z.infer<typeof PlannerOperationalLogOptionalDefaultsSchema>;

export default PlannerOperationalLogSchema;
