import { z } from 'zod';

/////////////////////////////////////////
// PLANNER OPERATIONAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalSchema = z.object({
  id: z.string().cuid(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerOperational = z.infer<typeof PlannerOperationalSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerOperationalPartialSchema = PlannerOperationalSchema.partial();

export type PlannerOperationalPartial = z.infer<typeof PlannerOperationalPartialSchema>;

/////////////////////////////////////////
// PLANNER OPERATIONAL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOperationalOptionalDefaultsSchema = PlannerOperationalSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerOperationalOptionalDefaults = z.infer<typeof PlannerOperationalOptionalDefaultsSchema>;

export default PlannerOperationalSchema;
