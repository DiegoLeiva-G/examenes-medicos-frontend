import { z } from 'zod';

export const BudgetSheetLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'status',
  'observations',
  'ip',
  'budgetSheetId',
  'userId',
  'createdAt',
]);

export default BudgetSheetLogScalarFieldEnumSchema;
