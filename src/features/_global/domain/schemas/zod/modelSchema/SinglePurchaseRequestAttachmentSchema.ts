import { z } from 'zod';
import { SinglePurchaseRequestAttachmentTypeSchema } from '../inputTypeSchemas/SinglePurchaseRequestAttachmentTypeSchema';

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST ATTACHMENT SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestAttachmentSchema = z.object({
  type: SinglePurchaseRequestAttachmentTypeSchema,
  id: z.string().cuid(),
  name: z.string(),
  url: z.string(),
  singlePurchaseRequestId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type SinglePurchaseRequestAttachment = z.infer<typeof SinglePurchaseRequestAttachmentSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST ATTACHMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestAttachmentPartialSchema = SinglePurchaseRequestAttachmentSchema.partial();

export type SinglePurchaseRequestAttachmentPartial = z.infer<typeof SinglePurchaseRequestAttachmentPartialSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST ATTACHMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestAttachmentOptionalDefaultsSchema = SinglePurchaseRequestAttachmentSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type SinglePurchaseRequestAttachmentOptionalDefaults = z.infer<
  typeof SinglePurchaseRequestAttachmentOptionalDefaultsSchema
>;

export default SinglePurchaseRequestAttachmentSchema;
