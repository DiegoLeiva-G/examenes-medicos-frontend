import { z } from 'zod';

export const PurchaseBudgetAvailabilityScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'year',
  'observations',
  'userResponsibleId',
  'currentSinglePurchaseRequestId',
  'singlePurchaseRequestId',
  'massivePurchaseRequestId',
  'budgetAvailabilityTemplateId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PurchaseBudgetAvailabilityScalarFieldEnumSchema;
