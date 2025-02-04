import { z } from 'zod';

export const PlannerPurchaseScalarFieldEnumSchema = z.enum([
  'id',
  'managementAreaCodeReference',
  'directorateCodeReference',
  'costCenterCodeReference',
  'plannerId',
  'archived',
  'createdAt',
]);

export default PlannerPurchaseScalarFieldEnumSchema;
