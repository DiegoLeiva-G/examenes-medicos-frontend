import { z } from 'zod';

export const PlannerSpecialHiringLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerSpecialHiringId',
  'userId',
  'createdAt',
]);

export default PlannerSpecialHiringLogScalarFieldEnumSchema;
