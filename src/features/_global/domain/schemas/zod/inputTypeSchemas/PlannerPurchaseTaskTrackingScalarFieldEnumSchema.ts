import { z } from 'zod';

export const PlannerPurchaseTaskTrackingScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'currentPlannerPurchaseTaskId',
  'plannerPurchaseTaskId',
  'userId',
  'createdAt',
]);

export default PlannerPurchaseTaskTrackingScalarFieldEnumSchema;
