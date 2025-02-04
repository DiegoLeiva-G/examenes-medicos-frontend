import { z } from 'zod';

export const ExpenseBudgetDetailScalarFieldEnumSchema = z.enum([
  'id',
  'accountCode',
  'accountName',
  'amount',
  'costCenterReferenceCode',
  'expenseBudgetId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default ExpenseBudgetDetailScalarFieldEnumSchema;
