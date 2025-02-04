import { z } from 'zod';

export const PlannerHiringTaskTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerHiringTaskId',
  'plannerHiringTaskId',
  'userId',
  'createdAt',
]);

export default PlannerHiringTaskTrackingScalarFieldEnumSchema;
