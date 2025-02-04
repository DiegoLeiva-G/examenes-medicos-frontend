import { z } from 'zod';

export const PlannerSpecialHiringStatusSchema = z.enum(['Sent', 'Approved', 'Rejected']);

export type PlannerSpecialHiringStatusType = `${z.infer<typeof PlannerSpecialHiringStatusSchema>}`;

export default PlannerSpecialHiringStatusSchema;
