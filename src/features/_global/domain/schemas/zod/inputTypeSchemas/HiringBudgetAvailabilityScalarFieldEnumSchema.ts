import { z } from 'zod';

export const HiringBudgetAvailabilityScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'year',
  'observations',
  'hiringRequestId',
  'budgetAvailabilityTemplateId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default HiringBudgetAvailabilityScalarFieldEnumSchema;
