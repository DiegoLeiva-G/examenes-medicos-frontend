import { z } from 'zod';

export const PlannerHiringScalarFieldEnumSchema = z.enum([
  'id',
  'managementAreaCodeReference',
  'directorateCodeReference',
  'costCenterCodeReference',
  'plannerId',
  'archived',
  'createdAt',
]);

export default PlannerHiringScalarFieldEnumSchema;
