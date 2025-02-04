import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER SUBSIDY LOG SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerSubsidyId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerSubsidyLog = z.infer<typeof PlannerSubsidyLogSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyLogPartialSchema = PlannerSubsidyLogSchema.partial();

export type PlannerSubsidyLogPartial = z.infer<typeof PlannerSubsidyLogPartialSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyLogOptionalDefaultsSchema = PlannerSubsidyLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSubsidyLogOptionalDefaults = z.infer<typeof PlannerSubsidyLogOptionalDefaultsSchema>;

export default PlannerSubsidyLogSchema;
