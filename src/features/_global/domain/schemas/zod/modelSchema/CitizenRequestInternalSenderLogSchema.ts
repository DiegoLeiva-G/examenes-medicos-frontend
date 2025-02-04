import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER LOG SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  citizenRequestInternalSenderId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type CitizenRequestInternalSenderLog = z.infer<typeof CitizenRequestInternalSenderLogSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderLogPartialSchema = CitizenRequestInternalSenderLogSchema.partial();

export type CitizenRequestInternalSenderLogPartial = z.infer<typeof CitizenRequestInternalSenderLogPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderLogOptionalDefaultsSchema = CitizenRequestInternalSenderLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestInternalSenderLogOptionalDefaults = z.infer<
  typeof CitizenRequestInternalSenderLogOptionalDefaultsSchema
>;

export default CitizenRequestInternalSenderLogSchema;
