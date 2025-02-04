import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER SPECIAL HIRING LOG SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerSpecialHiringId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerSpecialHiringLog = z.infer<typeof PlannerSpecialHiringLogSchema>;

/////////////////////////////////////////
// PLANNER SPECIAL HIRING LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringLogPartialSchema = PlannerSpecialHiringLogSchema.partial();

export type PlannerSpecialHiringLogPartial = z.infer<typeof PlannerSpecialHiringLogPartialSchema>;

/////////////////////////////////////////
// PLANNER SPECIAL HIRING LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringLogOptionalDefaultsSchema = PlannerSpecialHiringLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSpecialHiringLogOptionalDefaults = z.infer<typeof PlannerSpecialHiringLogOptionalDefaultsSchema>;

export default PlannerSpecialHiringLogSchema;
