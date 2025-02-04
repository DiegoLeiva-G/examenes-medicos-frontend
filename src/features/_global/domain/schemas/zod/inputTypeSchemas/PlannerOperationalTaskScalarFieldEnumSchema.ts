import { z } from 'zod';

export const PlannerOperationalTaskScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'startDate',
  'endDate',
  'status',
  'plannerOperationalId',
  'subPlannerOperationalTaskId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerOperationalTaskScalarFieldEnumSchema;
