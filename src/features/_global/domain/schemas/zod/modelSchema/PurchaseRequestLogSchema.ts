import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema';

/////////////////////////////////////////
// PURCHASE REQUEST LOG SCHEMA
/////////////////////////////////////////

export const PurchaseRequestLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  status: RequestStatusSchema,
  id: z.string().cuid(),
  observation: z.string().nullish(),
  singlePurchaseRequestId: z.string(),
  masivePurchaseRequestId: z.string(),
  createdAt: z.coerce.date(),
});

export type PurchaseRequestLog = z.infer<typeof PurchaseRequestLogSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PurchaseRequestLogPartialSchema = PurchaseRequestLogSchema.partial();

export type PurchaseRequestLogPartial = z.infer<typeof PurchaseRequestLogPartialSchema>;

/////////////////////////////////////////
// PURCHASE REQUEST LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PurchaseRequestLogOptionalDefaultsSchema = PurchaseRequestLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PurchaseRequestLogOptionalDefaults = z.infer<typeof PurchaseRequestLogOptionalDefaultsSchema>;

export default PurchaseRequestLogSchema;
