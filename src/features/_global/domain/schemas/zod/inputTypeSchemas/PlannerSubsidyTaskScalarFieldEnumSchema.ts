import { z } from 'zod';

export const PlannerSubsidyTaskScalarFieldEnumSchema = z.enum([
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
  'plannerSubsidyId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerSubsidyTaskScalarFieldEnumSchema;
