import { z } from 'zod';

export const FundingSourceTypeSchema = z.enum(['Internal', 'External']);

export type FundingSourceTypeType = `${z.infer<typeof FundingSourceTypeSchema>}`;

export default FundingSourceTypeSchema;
