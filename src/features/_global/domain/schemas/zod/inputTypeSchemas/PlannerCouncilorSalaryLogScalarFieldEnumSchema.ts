import { z } from 'zod';

export const PlannerCouncilorSalaryLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerCouncilorSalaryId',
  'userId',
  'createdAt',
]);

export default PlannerCouncilorSalaryLogScalarFieldEnumSchema;
