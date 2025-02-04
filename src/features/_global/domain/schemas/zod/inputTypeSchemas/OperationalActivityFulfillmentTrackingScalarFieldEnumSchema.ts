import { z } from 'zod';

export const OperationalActivityFulfillmentTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentOperationalActivityFulfillmentId',
  'operationalActivityFulfillmentId',
  'userId',
  'createdAt',
]);

export default OperationalActivityFulfillmentTrackingScalarFieldEnumSchema;
