import { z } from 'zod';

export const PmgPrioritySchema = z.enum(['High70', 'Medium20', 'Low10']);

export type PmgPriorityType = `${z.infer<typeof PmgPrioritySchema>}`;

export default PmgPrioritySchema;
