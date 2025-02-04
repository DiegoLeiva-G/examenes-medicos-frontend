import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER LOG SCHEMA
/////////////////////////////////////////

export const PlannerLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerLog = z.infer<typeof PlannerLogSchema>;

/////////////////////////////////////////
// PLANNER LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerLogPartialSchema = PlannerLogSchema.partial();

export type PlannerLogPartial = z.infer<typeof PlannerLogPartialSchema>;

/////////////////////////////////////////
// PLANNER LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerLogOptionalDefaultsSchema = PlannerLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerLogOptionalDefaults = z.infer<typeof PlannerLogOptionalDefaultsSchema>;

export default PlannerLogSchema;
