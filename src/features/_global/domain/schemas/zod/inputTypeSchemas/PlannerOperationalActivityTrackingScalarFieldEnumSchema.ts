import { z } from 'zod';

export const PlannerOperationalActivityTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerOperationalActivityId',
  'plannerOperationalActivityId',
  'userId',
  'createdAt',
]);

export default PlannerOperationalActivityTrackingScalarFieldEnumSchema;
