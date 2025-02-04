import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilitySchema = z.object({
  id: z.string().cuid(),
  correlative: z.number().int(),
  year: z.number().int(),
  observations: z.string().nullish(),
  userResponsibleId: z.string().nullish(),
  currentSinglePurchaseRequestId: z.string().nullish(),
  singlePurchaseRequestId: z.string().nullish(),
  massivePurchaseRequestId: z.string().nullish(),
  budgetAvailabilityTemplateId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PurchaseBudgetAvailability = z.infer<typeof PurchaseBudgetAvailabilitySchema>;

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY PARTIAL SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilityPartialSchema = PurchaseBudgetAvailabilitySchema.partial();

export type PurchaseBudgetAvailabilityPartial = z.infer<typeof PurchaseBudgetAvailabilityPartialSchema>;

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilityOptionalDefaultsSchema = PurchaseBudgetAvailabilitySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PurchaseBudgetAvailabilityOptionalDefaults = z.infer<
  typeof PurchaseBudgetAvailabilityOptionalDefaultsSchema
>;

export default PurchaseBudgetAvailabilitySchema;
