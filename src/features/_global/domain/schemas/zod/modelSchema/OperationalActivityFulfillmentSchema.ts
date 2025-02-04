import { z } from 'zod';
import { OperationalFulfillmentStatusSchema } from '../inputTypeSchemas/OperationalFulfillmentStatusSchema';

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentSchema = z.object({
  status: OperationalFulfillmentStatusSchema,
  id: z.string().cuid(),
  fulfillmentDate: z.coerce.date(),
  goal: z.number().int(),
  otherResponsibles: z.string().nullish(),
  observations: z.string().nullish(),
  attachamentFiles: z.string().array(),
  attachamentLinks: z.string().array(),
  plannerOperationalActivityId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type OperationalActivityFulfillment = z.infer<typeof OperationalActivityFulfillmentSchema>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentPartialSchema = OperationalActivityFulfillmentSchema.partial();

export type OperationalActivityFulfillmentPartial = z.infer<typeof OperationalActivityFulfillmentPartialSchema>;

/////////////////////////////////////////
// OPERATIONAL ACTIVITY FULFILLMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OperationalActivityFulfillmentOptionalDefaultsSchema = OperationalActivityFulfillmentSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type OperationalActivityFulfillmentOptionalDefaults = z.infer<
  typeof OperationalActivityFulfillmentOptionalDefaultsSchema
>;

export default OperationalActivityFulfillmentSchema;
