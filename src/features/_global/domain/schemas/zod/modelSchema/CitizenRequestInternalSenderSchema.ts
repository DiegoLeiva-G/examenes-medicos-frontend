import { z } from 'zod';

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderSchema = z.object({
  id: z.string().cuid(),
  directorateCodeReference: z.number().int().nullish(),
  departmentId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestInternalSender = z.infer<typeof CitizenRequestInternalSenderSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderPartialSchema = CitizenRequestInternalSenderSchema.partial();

export type CitizenRequestInternalSenderPartial = z.infer<typeof CitizenRequestInternalSenderPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST INTERNAL SENDER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestInternalSenderOptionalDefaultsSchema = CitizenRequestInternalSenderSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestInternalSenderOptionalDefaults = z.infer<
  typeof CitizenRequestInternalSenderOptionalDefaultsSchema
>;

export default CitizenRequestInternalSenderSchema;
