import { z } from 'zod';

export const PurchaseBudgetAvailabilityDetailScalarFieldEnumSchema = z.enum([
  'id',
  'costCenterCodeReference',
  'requestedAmount',
  'accountCodeReference',
  'initialAccountBudget',
  'cumulativeAmount',
  'balanceRemaining',
  'purchaseBudgetAvailabilityId',
  'purchaseRequestDetailId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PurchaseBudgetAvailabilityDetailScalarFieldEnumSchema;
