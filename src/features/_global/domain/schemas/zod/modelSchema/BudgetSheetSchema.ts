import { z } from 'zod';
import { BudgetSheetStatusSchema } from '../inputTypeSchemas/BudgetSheetStatusSchema';

/////////////////////////////////////////
// BUDGET SHEET SCHEMA
/////////////////////////////////////////

export const BudgetSheetSchema = z.object({
  status: BudgetSheetStatusSchema,
  id: z.string().cuid(),
  correlative: z.number().int(),
  year: z.number().int(),
  managementAreaReferenceCode: z.number().int(),
  centerCostReferenceCode: z.number().int(),
  directorateReferenceCode: z.number().int(),
  plannerPurchaseId: z.string().nullish(),
  plannerHiringId: z.string().nullish(),
  plannerSpecialHiringId: z.string().nullish(),
  plannerSubsidyId: z.string().nullish(),
  plannerCouncilorSalaryId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type BudgetSheet = z.infer<typeof BudgetSheetSchema>;

/////////////////////////////////////////
// BUDGET SHEET PARTIAL SCHEMA
/////////////////////////////////////////

export const BudgetSheetPartialSchema = BudgetSheetSchema.partial();

export type BudgetSheetPartial = z.infer<typeof BudgetSheetPartialSchema>;

/////////////////////////////////////////
// BUDGET SHEET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BudgetSheetOptionalDefaultsSchema = BudgetSheetSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type BudgetSheetOptionalDefaults = z.infer<typeof BudgetSheetOptionalDefaultsSchema>;

export default BudgetSheetSchema;
