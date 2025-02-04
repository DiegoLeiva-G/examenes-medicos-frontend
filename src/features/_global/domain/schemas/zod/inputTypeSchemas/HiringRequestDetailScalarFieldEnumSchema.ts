import { z } from 'zod';

export const HiringRequestDetailScalarFieldEnumSchema = z.enum([
  'id',
  'quantity',
  'unitAmount',
  'totalAmount',
  'hiringRequestId',
  'plannerHiringTaskId',
  'archived',
  'createdAt',
]);

export default HiringRequestDetailScalarFieldEnumSchema;
