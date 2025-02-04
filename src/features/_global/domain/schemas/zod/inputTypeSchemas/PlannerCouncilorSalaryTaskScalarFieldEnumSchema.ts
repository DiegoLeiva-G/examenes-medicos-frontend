import { z } from 'zod';

export const PlannerCouncilorSalaryTaskScalarFieldEnumSchema = z.enum([
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
  'plannerCouncilorSalaryId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerCouncilorSalaryTaskScalarFieldEnumSchema;
