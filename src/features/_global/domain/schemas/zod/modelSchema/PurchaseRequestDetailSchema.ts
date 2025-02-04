import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE REQUEST DETAIL SCHEMA
/////////////////////////////////////////

export const PurchaseRequestDetailSchema = z.object({
  id: z.string().cuid(),
  quantity: z.number().int(),
  detail: z.string(),
  unitAmount: z.number().int(),
  totalAmount: z.number().int(),
  singlePurchaseRequestId: z.string().nullish(),
  massivePurchaseRequestId: z.string().nullish(),
  plannerPurchaseTaskId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PurchaseRequestDetail = z.infer<typeof PurchaseRequestDetailSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const PurchaseRequestDetailPartialSchema = PurchaseRequestDetailSchema.partial();

export type PurchaseRequestDetailPartial = z.infer<typeof PurchaseRequestDetailPartialSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PurchaseRequestDetailOptionalDefaultsSchema = PurchaseRequestDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PurchaseRequestDetailOptionalDefaults = z.infer<typeof PurchaseRequestDetailOptionalDefaultsSchema>;

export default PurchaseRequestDetailSchema;
