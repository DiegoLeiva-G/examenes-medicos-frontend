import { z } from 'zod';
import { PlannerSpecialHiringStatusSchema } from '../inputTypeSchemas/PlannerSpecialHiringStatusSchema';

/////////////////////////////////////////
// PLANNER SPECIAL HIRING SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringSchema = z.object({
  status: PlannerSpecialHiringStatusSchema,
  id: z.string().cuid(),
  managementAreaCodeReference: z.number().int(),
  directorateCodeReference: z.number().int(),
  costCenterCodeReference: z.number().int(),
  observation: z.string().nullish(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerSpecialHiring = z.infer<typeof PlannerSpecialHiringSchema>;

/////////////////////////////////////////
// PLANNER SPECIAL HIRING PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringPartialSchema = PlannerSpecialHiringSchema.partial();

export type PlannerSpecialHiringPartial = z.infer<typeof PlannerSpecialHiringPartialSchema>;

/////////////////////////////////////////
// PLANNER SPECIAL HIRING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSpecialHiringOptionalDefaultsSchema = PlannerSpecialHiringSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSpecialHiringOptionalDefaults = z.infer<typeof PlannerSpecialHiringOptionalDefaultsSchema>;

export default PlannerSpecialHiringSchema;
