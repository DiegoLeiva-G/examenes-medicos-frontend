import { z } from 'zod';

export const PlannerHiringLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerHiringId',
  'userId',
  'createdAt',
]);

export default PlannerHiringLogScalarFieldEnumSchema;
