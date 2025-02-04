import { z } from 'zod';

export const PlannerTaskActivityTypeSchema = z.enum(['Task', 'SubTask', 'Activity']);

export type PlannerTaskActivityTypeType = `${z.infer<typeof PlannerTaskActivityTypeSchema>}`;

export default PlannerTaskActivityTypeSchema;
