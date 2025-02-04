import { z } from 'zod';

export const SinglePurchaseRequestAttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'type',
  'url',
  'singlePurchaseRequestId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default SinglePurchaseRequestAttachmentScalarFieldEnumSchema;
