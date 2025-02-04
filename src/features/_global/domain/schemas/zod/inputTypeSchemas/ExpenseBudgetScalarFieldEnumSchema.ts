import { z } from 'zod';

export const ExpenseBudgetScalarFieldEnumSchema = z.enum([
  'id',
  'year',
  'managementAreaReferenceCode',
  'directorateReferenceCode',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default ExpenseBudgetScalarFieldEnumSchema;
