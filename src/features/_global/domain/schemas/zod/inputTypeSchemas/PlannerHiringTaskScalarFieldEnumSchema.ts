import { z } from 'zod';

export const PlannerHiringTaskScalarFieldEnumSchema = z.enum([
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
  'plannerHiringId',
  'plannerSpecialHiringId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerHiringTaskScalarFieldEnumSchema;
