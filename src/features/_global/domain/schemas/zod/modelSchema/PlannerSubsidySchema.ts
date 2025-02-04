import { z } from 'zod';

/////////////////////////////////////////
// PLANNER SUBSIDY SCHEMA
/////////////////////////////////////////

export const PlannerSubsidySchema = z.object({
  id: z.string().cuid(),
  managementAreaCodeReference: z.number().int(),
  directorateCodeReference: z.number().int(),
  costCenterCodeReference: z.number().int(),
  observation: z.string().nullish(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerSubsidy = z.infer<typeof PlannerSubsidySchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyPartialSchema = PlannerSubsidySchema.partial();

export type PlannerSubsidyPartial = z.infer<typeof PlannerSubsidyPartialSchema>;

/////////////////////////////////////////
// PLANNER SUBSIDY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerSubsidyOptionalDefaultsSchema = PlannerSubsidySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerSubsidyOptionalDefaults = z.infer<typeof PlannerSubsidyOptionalDefaultsSchema>;

export default PlannerSubsidySchema;
