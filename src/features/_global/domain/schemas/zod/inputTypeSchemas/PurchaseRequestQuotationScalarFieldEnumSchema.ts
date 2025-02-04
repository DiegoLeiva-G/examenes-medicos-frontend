import { z } from 'zod';

export const PurchaseRequestQuotationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'attachment',
  'url',
  'description',
  'singlePurchaseRequestId',
  'massivePurchaseRequestId',
  'archived',
  'createdAt',
]);

export default PurchaseRequestQuotationScalarFieldEnumSchema;
