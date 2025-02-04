import { z } from 'zod';

export const IncomeBudgetLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'incomeBudgetId',
  'userId',
  'createdAt',
]);

export default IncomeBudgetLogScalarFieldEnumSchema;
