import { z } from 'zod';

export const ExpenseBudgetDetailLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'expenseBudgetDetailId',
  'userId',
  'createdAt',
]);

export default ExpenseBudgetDetailLogScalarFieldEnumSchema;
