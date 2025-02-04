import { z } from 'zod';

export const IndependentWorkContractTypeSchema = z.enum([
  'Professional',
  'Teacher',
  'Program',
  'ProfessionalWithBonus',
  'Practicing',
]);

export type IndependentWorkContractTypeType = `${z.infer<typeof IndependentWorkContractTypeSchema>}`;

export default IndependentWorkContractTypeSchema;
