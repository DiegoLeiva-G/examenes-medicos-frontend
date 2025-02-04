import { z } from 'zod';

export const PlannerSubsidyTaskTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerSubsidyTaskId',
  'plannerSubsidyTaskId',
  'userId',
  'createdAt',
]);

export default PlannerSubsidyTaskTrackingScalarFieldEnumSchema;
