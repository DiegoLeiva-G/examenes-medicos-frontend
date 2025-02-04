import { z } from 'zod';

export const IncomeBudgetDetailScalarFieldEnumSchema = z.enum([
  'id',
  'accountCode',
  'accountName',
  'amount',
  'incomeBudgetId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default IncomeBudgetDetailScalarFieldEnumSchema;
