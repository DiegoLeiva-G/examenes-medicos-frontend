import { z } from 'zod';

export const SinglePurchaseRequestScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'date',
  'directorateCodeReference',
  'purchaseProvider',
  'justification',
  'departmentId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default SinglePurchaseRequestScalarFieldEnumSchema;
