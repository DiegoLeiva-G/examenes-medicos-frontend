import { z } from 'zod';
import { OperationalFulfillmentStatusSchema } from '../inputTypeSchemas/OperationalFulfillmentStatusSchema';

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT TRACKING SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentTrackingSchema = z.object({
  status: OperationalFulfillmentStatusSchema,
  id: z.string().cuid(),
  currentOperationalActivityFulfillmentId: z.string().nullish(),
  operationalActivityFulfillmentId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type OperationalActivityFulfillmentTracking = z.infer<typeof OperationalActivityFulfillmentTrackingSchema>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentTrackingPartialSchema =
  OperationalActivityFulfillmentTrackingSchema.partial();

export type OperationalActivityFulfillmentTrackingPartial = z.infer<
  typeof OperationalActivityFulfillmentTrackingPartialSchema
>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentTrackingOptionalDefaultsSchema =
  OperationalActivityFulfillmentTrackingSchema.merge(
    z.object({
      id: z.string().cuid().optional(),
      createdAt: z.coerce.date().optional(),
    }),
  );

export type OperationalActivityFulfillmentTrackingOptionalDefaults = z.infer<
  typeof OperationalActivityFulfillmentTrackingOptionalDefaultsSchema
>;

export default OperationalActivityFulfillmentTrackingSchema;
