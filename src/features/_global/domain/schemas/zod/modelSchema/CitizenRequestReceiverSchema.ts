import { z } from 'zod';

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverSchema = z.object({
  id: z.string().cuid(),
  directorateCodeReference: z.number().int().nullish(),
  departmentId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestReceiver = z.infer<typeof CitizenRequestReceiverSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverPartialSchema = CitizenRequestReceiverSchema.partial();

export type CitizenRequestReceiverPartial = z.infer<typeof CitizenRequestReceiverPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RECEIVER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestReceiverOptionalDefaultsSchema = CitizenRequestReceiverSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestReceiverOptionalDefaults = z.infer<typeof CitizenRequestReceiverOptionalDefaultsSchema>;

export default CitizenRequestReceiverSchema;
