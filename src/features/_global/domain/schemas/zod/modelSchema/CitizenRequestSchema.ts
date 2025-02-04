import { z } from 'zod';
import { FileStorageProviderSchema } from '../inputTypeSchemas/FileStorageProviderSchema';

/////////////////////////////////////////
// CITIZEN REQUEST SCHEMA
/////////////////////////////////////////

export const CitizenRequestSchema = z.object({
  attachmentProvider: FileStorageProviderSchema.nullish(),
  id: z.string().cuid(),
  internalId: z.number().int(),
  description: z.string().nullish(),
  attachmentId: z.string().nullish(),
  attachmentFolderId: z.string().nullish(),
  attachmentUrl: z.string().nullish(),
  attachmentName: z.string().nullish(),
  expirationDate: z.coerce.date().nullish(),
  representsAnotherPerson: z.boolean(),
  citizenRequestTypeId: z.string(),
  citizenRequestCategoryId: z.string().nullish(),
  legalPersonId: z.string().nullish(),
  representedLegalPersonId: z.string().nullish(),
  legalEntityDirectiveMemberId: z.string().nullish(),
  legalEntityId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequest = z.infer<typeof CitizenRequestSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestPartialSchema = CitizenRequestSchema.partial();

export type CitizenRequestPartial = z.infer<typeof CitizenRequestPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestOptionalDefaultsSchema = CitizenRequestSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    internalId: z.number().int().optional(),
    representsAnotherPerson: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestOptionalDefaults = z.infer<typeof CitizenRequestOptionalDefaultsSchema>;

export default CitizenRequestSchema;
