import { z } from 'zod';

export const CitizenRequestTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentCitizenRequestId',
  'citizenRequestId',
  'userId',
  'createdAt',
]);

export default CitizenRequestTrackingScalarFieldEnumSchema;
