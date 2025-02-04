import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY DETAIL SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilityDetailSchema = z.object({
  id: z.string().cuid(),
  costCenterCodeReference: z.number().int(),
  requestedAmount: z.number().int(),
  accountCodeReference: z.string(),
  initialAccountBudget: z.number().int(),
  cumulativeAmount: z.number().int(),
  balanceRemaining: z.number().int(),
  purchaseBudgetAvailabilityId: z.string(),
  purchaseRequestDetailId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PurchaseBudgetAvailabilityDetail = z.infer<typeof PurchaseBudgetAvailabilityDetailSchema>;

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilityDetailPartialSchema = PurchaseBudgetAvailabilityDetailSchema.partial();

export type PurchaseBudgetAvailabilityDetailPartial = z.infer<typeof PurchaseBudgetAvailabilityDetailPartialSchema>;

/////////////////////////////////////////
// PURCHASE BUDGET AVAILABILITY DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PurchaseBudgetAvailabilityDetailOptionalDefaultsSchema = PurchaseBudgetAvailabilityDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PurchaseBudgetAvailabilityDetailOptionalDefaults = z.infer<
  typeof PurchaseBudgetAvailabilityDetailOptionalDefaultsSchema
>;

export default PurchaseBudgetAvailabilityDetailSchema;
