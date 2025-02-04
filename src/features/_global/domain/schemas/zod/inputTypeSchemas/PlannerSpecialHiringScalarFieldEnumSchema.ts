import { z } from 'zod';

export const PlannerSpecialHiringScalarFieldEnumSchema = z.enum([
  'id',
  'managementAreaCodeReference',
  'directorateCodeReference',
  'costCenterCodeReference',
  'status',
  'observation',
  'plannerId',
  'archived',
  'createdAt',
]);

export default PlannerSpecialHiringScalarFieldEnumSchema;
