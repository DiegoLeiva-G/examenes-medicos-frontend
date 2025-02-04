import { z } from 'zod';

export const ExpenseBudgetLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'expenseBudgetId',
  'userId',
  'createdAt',
]);

export default ExpenseBudgetLogScalarFieldEnumSchema;
