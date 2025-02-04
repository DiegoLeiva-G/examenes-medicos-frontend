import { z } from 'zod';

export const PlannerCouncilorSalaryTaskTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerCouncilorSalaryTaskId',
  'plannerCouncilorSalaryTaskId',
  'userId',
  'createdAt',
]);

export default PlannerCouncilorSalaryTaskTrackingScalarFieldEnumSchema;
