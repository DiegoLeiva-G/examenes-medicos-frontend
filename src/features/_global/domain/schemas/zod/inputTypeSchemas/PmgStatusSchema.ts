import { z } from 'zod';

export const PmgStatusSchema = z.enum(['Initialized', 'Proposed', 'UnderEvaluation', 'Approved', 'Rejected']);

export type PmgStatusType = `${z.infer<typeof PmgStatusSchema>}`;

export default PmgStatusSchema;
