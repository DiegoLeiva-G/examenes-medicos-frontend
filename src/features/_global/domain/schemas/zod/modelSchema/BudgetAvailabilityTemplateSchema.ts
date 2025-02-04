import { z } from 'zod';

/////////////////////////////////////////
// BUDGET AVAILABILITY TEMPLATE SCHEMA
/////////////////////////////////////////

export const BudgetAvailabilityTemplateSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  year: z.number().int(),
  details: z.string(),
  leftSignature: z.string().nullish(),
  rigthSignature: z.string().nullish(),
  active: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type BudgetAvailabilityTemplate = z.infer<typeof BudgetAvailabilityTemplateSchema>;

/////////////////////////////////////////
// BUDGET AVAILABILITY TEMPLATE PARTIAL SCHEMA
/////////////////////////////////////////

export const BudgetAvailabilityTemplatePartialSchema = BudgetAvailabilityTemplateSchema.partial();

export type BudgetAvailabilityTemplatePartial = z.infer<typeof BudgetAvailabilityTemplatePartialSchema>;

/////////////////////////////////////////
// BUDGET AVAILABILITY TEMPLATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BudgetAvailabilityTemplateOptionalDefaultsSchema = BudgetAvailabilityTemplateSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    active: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type BudgetAvailabilityTemplateOptionalDefaults = z.infer<
  typeof BudgetAvailabilityTemplateOptionalDefaultsSchema
>;

export default BudgetAvailabilityTemplateSchema;
