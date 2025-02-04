import { z } from 'zod';

export const PlannerCouncilorSalaryScalarFieldEnumSchema = z.enum([
  'id',
  'managementAreaCodeReference',
  'directorateCodeReference',
  'costCenterCodeReference',
  'observation',
  'plannerId',
  'archived',
  'createdAt',
]);

export default PlannerCouncilorSalaryScalarFieldEnumSchema;
