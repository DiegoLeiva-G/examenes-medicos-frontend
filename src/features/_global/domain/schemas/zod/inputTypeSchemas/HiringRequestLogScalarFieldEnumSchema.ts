import { z } from 'zod';

export const HiringRequestLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observation',
  'status',
  'hiringRequestId',
  'createdAt',
]);

export default HiringRequestLogScalarFieldEnumSchema;
