import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE REQUEST QUOTATION SCHEMA
/////////////////////////////////////////

export const PurchaseRequestQuotationSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  attachment: z.string().nullish(),
  url: z.string().nullish(),
  description: z.string().nullish(),
  singlePurchaseRequestId: z.string().nullish(),
  massivePurchaseRequestId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PurchaseRequestQuotation = z.infer<typeof PurchaseRequestQuotationSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST QUOTATION PARTIAL SCHEMA
/////////////////////////////////////////

export const PurchaseRequestQuotationPartialSchema = PurchaseRequestQuotationSchema.partial();

export type PurchaseRequestQuotationPartial = z.infer<typeof PurchaseRequestQuotationPartialSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST QUOTATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PurchaseRequestQuotationOptionalDefaultsSchema = PurchaseRequestQuotationSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PurchaseRequestQuotationOptionalDefaults = z.infer<typeof PurchaseRequestQuotationOptionalDefaultsSchema>;

export default PurchaseRequestQuotationSchema;
