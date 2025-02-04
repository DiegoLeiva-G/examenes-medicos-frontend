import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER HIRING LOG SCHEMA
/////////////////////////////////////////

export const PlannerHiringLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerHiringId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerHiringLog = z.infer<typeof PlannerHiringLogSchema>;

/////////////////////////////////////////
// PLANNER HIRING LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerHiringLogPartialSchema = PlannerHiringLogSchema.partial();

export type PlannerHiringLogPartial = z.infer<typeof PlannerHiringLogPartialSchema>;

/////////////////////////////////////////
// PLANNER HIRING LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerHiringLogOptionalDefaultsSchema = PlannerHiringLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerHiringLogOptionalDefaults = z.infer<typeof PlannerHiringLogOptionalDefaultsSchema>;

export default PlannerHiringLogSchema;
