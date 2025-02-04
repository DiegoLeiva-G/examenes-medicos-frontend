import { z } from 'zod';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema';

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST TRACKING SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestTrackingSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().cuid(),
  observation: z.string().nullish(),
  currentSinglePurchaseRequestId: z.string().nullish(),
  singlePurchaseRequestId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type SinglePurchaseRequestTracking = z.infer<typeof SinglePurchaseRequestTrackingSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestTrackingPartialSchema = SinglePurchaseRequestTrackingSchema.partial();

export type SinglePurchaseRequestTrackingPartial = z.infer<typeof SinglePurchaseRequestTrackingPartialSchema>;

/////////////////////////////////////////
// SINGLE PURCHASE REQUEST TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SinglePurchaseRequestTrackingOptionalDefaultsSchema = SinglePurchaseRequestTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type SinglePurchaseRequestTrackingOptionalDefaults = z.infer<
  typeof SinglePurchaseRequestTrackingOptionalDefaultsSchema
>;

export default SinglePurchaseRequestTrackingSchema;
