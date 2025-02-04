import { z } from 'zod';

export const IncomeBudgetScalarFieldEnumSchema = z.enum([
  'id',
  'year',
  'managementAreaReferenceCode',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default IncomeBudgetScalarFieldEnumSchema;
