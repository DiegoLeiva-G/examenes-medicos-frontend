import { z } from 'zod';

export const BudgetSheetScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'year',
  'managementAreaReferenceCode',
  'centerCostReferenceCode',
  'directorateReferenceCode',
  'status',
  'plannerPurchaseId',
  'plannerHiringId',
  'plannerSpecialHiringId',
  'plannerSubsidyId',
  'plannerCouncilorSalaryId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default BudgetSheetScalarFieldEnumSchema;
