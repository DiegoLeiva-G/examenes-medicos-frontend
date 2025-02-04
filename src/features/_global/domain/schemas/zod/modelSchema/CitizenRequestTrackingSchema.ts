import { z } from 'zod';
import { CitizenRequestStatusSchema } from '../inputTypeSchemas/CitizenRequestStatusSchema';

/////////////////////////////////////////
// CITIZEN REQUEST TRACKING SCHEMA
/////////////////////////////////////////

export const CitizenRequestTrackingSchema = z.object({
  status: CitizenRequestStatusSchema,
  id: z.string().cuid(),
  currentCitizenRequestId: z.string().nullish(),
  citizenRequestId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type CitizenRequestTracking = z.infer<typeof CitizenRequestTrackingSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TRACKING PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestTrackingPartialSchema = CitizenRequestTrackingSchema.partial();

export type CitizenRequestTrackingPartial = z.infer<typeof CitizenRequestTrackingPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TRACKING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestTrackingOptionalDefaultsSchema = CitizenRequestTrackingSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestTrackingOptionalDefaults = z.infer<typeof CitizenRequestTrackingOptionalDefaultsSchema>;

export default CitizenRequestTrackingSchema;
