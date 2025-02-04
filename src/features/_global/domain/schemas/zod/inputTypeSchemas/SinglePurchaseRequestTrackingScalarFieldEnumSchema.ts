import { z } from 'zod';

export const SinglePurchaseRequestTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'observation',
  'currentSinglePurchaseRequestId',
  'singlePurchaseRequestId',
  'userId',
  'createdAt',
]);

export default SinglePurchaseRequestTrackingScalarFieldEnumSchema;
