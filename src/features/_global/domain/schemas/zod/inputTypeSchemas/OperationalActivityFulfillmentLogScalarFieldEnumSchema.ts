import { z } from 'zod';

export const OperationalActivityFulfillmentLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'operationalActivityFulfillmentId',
  'userId',
  'createdAt',
]);

export default OperationalActivityFulfillmentLogScalarFieldEnumSchema;
