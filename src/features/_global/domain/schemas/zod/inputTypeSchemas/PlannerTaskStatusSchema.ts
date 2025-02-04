import { z } from 'zod';

export const PlannerTaskStatusSchema = z.enum(['NotInitialized', 'InProcess', 'Complete', 'Incomplete']);

export type PlannerTaskStatusType = `${z.infer<typeof PlannerTaskStatusSchema>}`;

export default PlannerTaskStatusSchema;
