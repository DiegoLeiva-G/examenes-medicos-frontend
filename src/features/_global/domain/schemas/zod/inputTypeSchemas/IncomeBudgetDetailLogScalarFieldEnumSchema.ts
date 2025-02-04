import { z } from 'zod';

export const IncomeBudgetDetailLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'incomeBudgetDetailId',
  'userId',
  'createdAt',
]);

export default IncomeBudgetDetailLogScalarFieldEnumSchema;
