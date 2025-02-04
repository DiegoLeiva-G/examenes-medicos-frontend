import { z } from 'zod';

export const PurchaseRequestLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observation',
  'status',
  'singlePurchaseRequestId',
  'masivePurchaseRequestId',
  'createdAt',
]);

export default PurchaseRequestLogScalarFieldEnumSchema;
