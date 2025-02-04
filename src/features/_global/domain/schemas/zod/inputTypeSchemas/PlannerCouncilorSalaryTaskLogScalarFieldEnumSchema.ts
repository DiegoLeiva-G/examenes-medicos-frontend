import { z } from 'zod';

export const PlannerCouncilorSalaryTaskLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerCouncilorSalaryTaskId',
  'userId',
  'createdAt',
]);

export default PlannerCouncilorSalaryTaskLogScalarFieldEnumSchema;
