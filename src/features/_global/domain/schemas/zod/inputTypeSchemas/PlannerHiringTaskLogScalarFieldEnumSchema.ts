import { z } from 'zod';

export const PlannerHiringTaskLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerHiringTaskId',
  'userId',
  'createdAt',
]);

export default PlannerHiringTaskLogScalarFieldEnumSchema;
