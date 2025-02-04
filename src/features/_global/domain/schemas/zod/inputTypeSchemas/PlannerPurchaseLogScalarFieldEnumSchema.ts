import { z } from 'zod';

export const PlannerPurchaseLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerPurchaseId',
  'userId',
  'createdAt',
]);

export default PlannerPurchaseLogScalarFieldEnumSchema;
