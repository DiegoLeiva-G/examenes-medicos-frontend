import { z } from 'zod';

export const PlannerOperationalActivityScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'expectedQuantityGoal',
  'startDate',
  'endDate',
  'status',
  'plannerOperationalTaskId',
  'measureUnitId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerOperationalActivityScalarFieldEnumSchema;
