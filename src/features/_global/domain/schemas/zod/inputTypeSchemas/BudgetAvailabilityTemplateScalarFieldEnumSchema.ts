import { z } from 'zod';

export const BudgetAvailabilityTemplateScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'year',
  'details',
  'leftSignature',
  'rigthSignature',
  'active',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default BudgetAvailabilityTemplateScalarFieldEnumSchema;
