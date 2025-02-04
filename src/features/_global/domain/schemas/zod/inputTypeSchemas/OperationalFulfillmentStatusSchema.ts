import { z } from 'zod';

export const OperationalFulfillmentStatusSchema = z.enum(['Draft', 'Sent', 'Discarded']);

export type OperationalFulfillmentStatusType = `${z.infer<typeof OperationalFulfillmentStatusSchema>}`;

export default OperationalFulfillmentStatusSchema;
