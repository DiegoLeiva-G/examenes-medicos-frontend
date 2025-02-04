import { z } from 'zod';

export const PlannerOperationalActivityLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerOperationalActivityId',
  'userId',
  'createdAt',
]);

export default PlannerOperationalActivityLogScalarFieldEnumSchema;
