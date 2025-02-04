import { z } from 'zod';

export const PlannerLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerId',
  'userId',
  'createdAt',
]);

export default PlannerLogScalarFieldEnumSchema;
