import { z } from 'zod';

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY DETAIL SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilityDetailSchema = z.object({
  id: z.string().cuid(),
  costCenterCodeReference: z.number().int(),
  requestedAmount: z.number().int(),
  accountCodeReference: z.string(),
  initialAccountBudget: z.number().int(),
  cumulativeAmount: z.number().int(),
  balanceRemaining: z.number().int(),
  hiringBudgetAvailabilityId: z.string(),
  hiringRequestDetailId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type HiringBudgetAvailabilityDetail = z.infer<typeof HiringBudgetAvailabilityDetailSchema>;

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilityDetailPartialSchema = HiringBudgetAvailabilityDetailSchema.partial();

export type HiringBudgetAvailabilityDetailPartial = z.infer<typeof HiringBudgetAvailabilityDetailPartialSchema>;

/////////////////////////////////////////
// HIRING BUDGET AVAILABILITY DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HiringBudgetAvailabilityDetailOptionalDefaultsSchema = HiringBudgetAvailabilityDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type HiringBudgetAvailabilityDetailOptionalDefaults = z.infer<
  typeof HiringBudgetAvailabilityDetailOptionalDefaultsSchema
>;

export default HiringBudgetAvailabilityDetailSchema;
