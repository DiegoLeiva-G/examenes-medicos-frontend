import { z } from 'zod';

export const CitizenRequestScalarFieldEnumSchema = z.enum([
  'id',
  'internalId',
  'description',
  'attachmentProvider',
  'attachmentId',
  'attachmentFolderId',
  'attachmentUrl',
  'attachmentName',
  'expirationDate',
  'representsAnotherPerson',
  'citizenRequestTypeId',
  'citizenRequestCategoryId',
  'legalPersonId',
  'representedLegalPersonId',
  'legalEntityDirectiveMemberId',
  'legalEntityId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestScalarFieldEnumSchema;
