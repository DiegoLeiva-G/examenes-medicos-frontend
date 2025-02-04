import { z } from 'zod';

/////////////////////////////////////////
// PLANNER HIRING SCHEMA
/////////////////////////////////////////

export const PlannerHiringSchema = z.object({
  id: z.string().cuid(),
  managementAreaCodeReference: z.number().int(),
  directorateCodeReference: z.number().int(),
  costCenterCodeReference: z.number().int(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerHiring = z.infer<typeof PlannerHiringSchema>;

/////////////////////////////////////////
// PLANNER HIRING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerHiringPartialSchema = PlannerHiringSchema.partial();

export type PlannerHiringPartial = z.infer<typeof PlannerHiringPartialSchema>;

/////////////////////////////////////////
// PLANNER HIRING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerHiringOptionalDefaultsSchema = PlannerHiringSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerHiringOptionalDefaults = z.infer<typeof PlannerHiringOptionalDefaultsSchema>;

export default PlannerHiringSchema;
