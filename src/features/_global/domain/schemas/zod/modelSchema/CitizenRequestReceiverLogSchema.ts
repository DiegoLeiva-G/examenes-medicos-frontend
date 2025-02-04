import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER LOG SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  citizenRequestReceiverId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type CitizenRequestReceiverLog = z.infer<typeof CitizenRequestReceiverLogSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverLogPartialSchema = CitizenRequestReceiverLogSchema.partial();

export type CitizenRequestReceiverLogPartial = z.infer<typeof CitizenRequestReceiverLogPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverLogOptionalDefaultsSchema = CitizenRequestReceiverLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestReceiverLogOptionalDefaults = z.infer<typeof CitizenRequestReceiverLogOptionalDefaultsSchema>;

export default CitizenRequestReceiverLogSchema;
