import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT LOG SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  operationalActivityFulfillmentId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type OperationalActivityFulfillmentLog = z.infer<typeof OperationalActivityFulfillmentLogSchema>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentLogPartialSchema = OperationalActivityFulfillmentLogSchema.partial();

export type OperationalActivityFulfillmentLogPartial = z.infer<typeof OperationalActivityFulfillmentLogPartialSchema>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentLogOptionalDefaultsSchema = OperationalActivityFulfillmentLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type OperationalActivityFulfillmentLogOptionalDefaults = z.infer<
  typeof OperationalActivityFulfillmentLogOptionalDefaultsSchema
>;

export default OperationalActivityFulfillmentLogSchema;
