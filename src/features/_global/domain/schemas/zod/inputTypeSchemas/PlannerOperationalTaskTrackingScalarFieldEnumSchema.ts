import { z } from 'zod';

export const PlannerOperationalTaskTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerOperationalTaskId',
  'plannerOperationalTaskId',
  'userId',
  'createdAt',
]);

export default PlannerOperationalTaskTrackingScalarFieldEnumSchema;
