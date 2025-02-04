import { z } from 'zod';

/////////////////////////////////////////
// PLANNER SCHEMA
/////////////////////////////////////////

export const PlannerSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  year: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  investmentInitiativeId: z.string().nullish(),
  improvementProjectId: z.string().nullish(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Planner = z.infer<typeof PlannerSchema>;

/////////////////////////////////////////
// PLANNER PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerPartialSchema = PlannerSchema.partial();

export type PlannerPartial = z.infer<typeof PlannerPartialSchema>;

/////////////////////////////////////////
// PLANNER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerOptionalDefaultsSchema = PlannerSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PlannerOptionalDefaults = z.infer<typeof PlannerOptionalDefaultsSchema>;

export default PlannerSchema;
