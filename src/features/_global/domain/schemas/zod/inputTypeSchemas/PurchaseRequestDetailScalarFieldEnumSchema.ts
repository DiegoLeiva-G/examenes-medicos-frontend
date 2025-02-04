import { z } from 'zod';

export const PurchaseRequestDetailScalarFieldEnumSchema = z.enum([
  'id',
  'quantity',
  'detail',
  'unitAmount',
  'totalAmount',
  'singlePurchaseRequestId',
  'massivePurchaseRequestId',
  'plannerPurchaseTaskId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PurchaseRequestDetailScalarFieldEnumSchema;
