import { z } from 'zod';

export const CitizenRequestResponseScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'attachmentProvider',
  'attachmentId',
  'attachmentFolderId',
  'attachmentUrl',
  'attachmentName',
  'directorateCodeReference',
  'derivedDirectorate',
  'citizenRequestId',
  'finalCitizenRequestId',
  'departmentId',
  'userId',
  'legalPersonId',
  'legalEntityId',
  'subCitizenRequestResponseId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestResponseScalarFieldEnumSchema;
