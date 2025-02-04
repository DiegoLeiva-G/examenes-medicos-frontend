import { z } from 'zod';

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestSchema = z.object({
  id: z.string().cuid(),
  correlative: z.number().int(),
  date: z.coerce.date(),
  directorateCodeReference: z.number().int().nullish(),
  purchaseProvider: z.string().nullish(),
  justification: z.string().nullish(),
  departmentId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type SinglePurchaseRequest = z.infer<typeof SinglePurchaseRequestSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestPartialSchema = SinglePurchaseRequestSchema.partial();

export type SinglePurchaseRequestPartial = z.infer<typeof SinglePurchaseRequestPartialSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestOptionalDefaultsSchema = SinglePurchaseRequestSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    correlative: z.number().int().optional(),
    date: z.coerce.date().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type SinglePurchaseRequestOptionalDefaults = z.infer<typeof SinglePurchaseRequestOptionalDefaultsSchema>;

export default SinglePurchaseRequestSchema;
