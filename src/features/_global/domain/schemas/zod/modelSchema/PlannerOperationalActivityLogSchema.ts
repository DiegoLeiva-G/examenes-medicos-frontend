import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY LOG SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  plannerOperationalActivityId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PlannerOperationalActivityLog = z.infer<typeof PlannerOperationalActivityLogSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityLogPartialSchema = PlannerOperationalActivityLogSchema.partial();

export type PlannerOperationalActivityLogPartial = z.infer<typeof PlannerOperationalActivityLogPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL ACTIVITY LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalActivityLogOptionalDefaultsSchema = PlannerOperationalActivityLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalActivityLogOptionalDefaults = z.infer<
  typeof PlannerOperationalActivityLogOptionalDefaultsSchema
>;

export default PlannerOperationalActivityLogSchema;
