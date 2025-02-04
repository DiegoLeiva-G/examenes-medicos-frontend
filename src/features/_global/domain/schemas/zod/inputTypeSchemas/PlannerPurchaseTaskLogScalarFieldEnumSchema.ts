import { z } from 'zod';

export const PlannerPurchaseTaskLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerPurchaseTaskId',
  'userId',
  'createdAt',
]);

export default PlannerPurchaseTaskLogScalarFieldEnumSchema;
