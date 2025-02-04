import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER SUBSIDY TASK LOG SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerSubsidyTaskId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerSubsidyTaskLog = z.infer<typeof PlannerSubsidyTaskLogSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskLogPartialSchema = PlannerSubsidyTaskLogSchema.partial();

export type PlannerSubsidyTaskLogPartial = z.infer<typeof PlannerSubsidyTaskLogPartialSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY TASK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyTaskLogOptionalDefaultsSchema = PlannerSubsidyTaskLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSubsidyTaskLogOptionalDefaults = z.infer<typeof PlannerSubsidyTaskLogOptionalDefaultsSchema>;

export default PlannerSubsidyTaskLogSchema;
