import { z } from 'zod';
import { FileStorageProviderSchema } from '../inputTypeSchemas/FileStorageProviderSchema';

/////////////////////////////////////////
// CITIZEN REQUEST RESPONSE SCHEMA
/////////////////////////////////////////

export const CitizenRequestResponseSchema = z.object({
  attachmentProvider: FileStorageProviderSchema.nullish(),
  id: z.string().cuid(),
  description: z.string().nullish(),
  attachmentId: z.string().nullish(),
  attachmentFolderId: z.string().nullish(),
  attachmentUrl: z.string().nullish(),
  attachmentName: z.string().nullish(),
  directorateCodeReference: z.number().int().nullish(),
  derivedDirectorate: z.number().int().array(),
  citizenRequestId: z.string(),
  finalCitizenRequestId: z.string().nullish(),
  departmentId: z.string().nullish(),
  userId: z.string().nullish(),
  legalPersonId: z.string().nullish(),
  legalEntityId: z.string().nullish(),
  subCitizenRequestResponseId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestResponse = z.infer<typeof CitizenRequestResponseSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RESPONSE PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestResponsePartialSchema = CitizenRequestResponseSchema.partial();

export type CitizenRequestResponsePartial = z.infer<typeof CitizenRequestResponsePartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST RESPONSE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestResponseOptionalDefaultsSchema = CitizenRequestResponseSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestResponseOptionalDefaults = z.infer<typeof CitizenRequestResponseOptionalDefaultsSchema>;

export default CitizenRequestResponseSchema;
