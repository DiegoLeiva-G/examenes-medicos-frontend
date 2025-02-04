import { z } from 'zod';

export const SinglePurchaseRequestAttachmentTypeSchema = z.enum(['File', 'Link']);

export type SinglePurchaseRequestAttachmentTypeType = `${z.infer<typeof SinglePurchaseRequestAttachmentTypeSchema>}`;

export default SinglePurchaseRequestAttachmentTypeSchema;
