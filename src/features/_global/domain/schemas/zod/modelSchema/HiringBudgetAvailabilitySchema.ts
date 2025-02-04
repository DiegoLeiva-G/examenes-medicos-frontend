import { z } from 'zod';

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilitySchema = z.object({
  id: z.string().cuid(),
  correlative: z.number().int(),
  year: z.number().int(),
  observations: z.string().nullish(),
  hiringRequestId: z.string(),
  budgetAvailabilityTemplateId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type HiringBudgetAvailability = z.infer<typeof HiringBudgetAvailabilitySchema>;

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY PARTIAL SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilityPartialSchema = HiringBudgetAvailabilitySchema.partial();

export type HiringBudgetAvailabilityPartial = z.infer<typeof HiringBudgetAvailabilityPartialSchema>;

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilityOptionalDefaultsSchema = HiringBudgetAvailabilitySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type HiringBudgetAvailabilityOptionalDefaults = z.infer<typeof HiringBudgetAvailabilityOptionalDefaultsSchema>;

export default HiringBudgetAvailabilitySchema;
