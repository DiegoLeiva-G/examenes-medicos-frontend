import { z } from 'zod';

export const PlannerOperationalTaskLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerOperationalTaskId',
  'userId',
  'createdAt',
]);

export default PlannerOperationalTaskLogScalarFieldEnumSchema;
