import { z } from 'zod';

export const WorkContractTypeSchema = z.enum(['Independent', 'Plant', 'Contract']);

export type WorkContractTypeType = `${z.infer<typeof WorkContractTypeSchema>}`;

export default WorkContractTypeSchema;
