import { z } from 'zod';

export const PlannerOperationalLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerOperationalId',
  'userId',
  'createdAt',
]);

export default PlannerOperationalLogScalarFieldEnumSchema;
