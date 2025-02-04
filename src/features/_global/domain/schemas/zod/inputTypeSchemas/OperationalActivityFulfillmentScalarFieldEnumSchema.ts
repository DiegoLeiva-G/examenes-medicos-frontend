import { z } from 'zod';

export const OperationalActivityFulfillmentScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'fulfillmentDate',
  'goal',
  'otherResponsibles',
  'observations',
  'attachamentFiles',
  'attachamentLinks',
  'plannerOperationalActivityId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default OperationalActivityFulfillmentScalarFieldEnumSchema;
