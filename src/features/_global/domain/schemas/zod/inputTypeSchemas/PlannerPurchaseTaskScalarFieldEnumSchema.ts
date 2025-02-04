import { z } from 'zod';

export const PlannerPurchaseTaskScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'expectedQuantityGoal',
  'minimumQuantityGoal',
  'startDate',
  'endDate',
  'accountPlanCodeReference',
  'totalBudgetAmount',
  'approvedBudget',
  'status',
  'measureUnitId',
  'plannerPurchaseId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerPurchaseTaskScalarFieldEnumSchema;
