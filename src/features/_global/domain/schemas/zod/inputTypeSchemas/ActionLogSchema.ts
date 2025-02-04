import { z } from 'zod';

export const ActionLogSchema = z.enum(['Create', 'Update', 'Delete', 'Assign', 'UnAssign']);

export type ActionLogType = `${z.infer<typeof ActionLogSchema>}`;

export default ActionLogSchema;
