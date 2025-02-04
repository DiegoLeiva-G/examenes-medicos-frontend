import { z } from 'zod';

export const IndependentWorkContractStatusSchema = z.enum([
  'InProcess',
  'VoluntaryResignation',
  'Disassociation',
  'ContractCompletion',
]);

export type IndependentWorkContractStatusType = `${z.infer<typeof IndependentWorkContractStatusSchema>}`;

export default IndependentWorkContractStatusSchema;
