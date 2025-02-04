import { z } from 'zod';

export const PlannerTaskActivityOriginSchema = z.enum(['Normal', 'Pmg']);

export type PlannerTaskActivityOriginType = `${z.infer<typeof PlannerTaskActivityOriginSchema>}`;

export default PlannerTaskActivityOriginSchema;
