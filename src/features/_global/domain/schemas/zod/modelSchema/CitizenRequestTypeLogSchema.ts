import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// CITIZEN REQUEST TYPE LOG SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypeLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  citizenRequestTypeId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type CitizenRequestTypeLog = z.infer<typeof CitizenRequestTypeLogSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TYPE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypeLogPartialSchema = CitizenRequestTypeLogSchema.partial();

export type CitizenRequestTypeLogPartial = z.infer<typeof CitizenRequestTypeLogPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TYPE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypeLogOptionalDefaultsSchema = CitizenRequestTypeLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestTypeLogOptionalDefaults = z.infer<typeof CitizenRequestTypeLogOptionalDefaultsSchema>;

export default CitizenRequestTypeLogSchema;
