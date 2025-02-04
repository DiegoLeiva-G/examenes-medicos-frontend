import { z } from 'zod';

export const HiringBudgetAvailabilityDetailScalarFieldEnumSchema = z.enum([
  'id',
  'costCenterCodeReference',
  'requestedAmount',
  'accountCodeReference',
  'initialAccountBudget',
  'cumulativeAmount',
  'balanceRemaining',
  'hiringBudgetAvailabilityId',
  'hiringRequestDetailId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default HiringBudgetAvailabilityDetailScalarFieldEnumSchema;
