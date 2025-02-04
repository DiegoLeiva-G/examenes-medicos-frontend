import { z } from 'zod';

export const CitizenRequestInternalSenderScalarFieldEnumSchema = z.enum([
  'id',
  'directorateCodeReference',
  'departmentId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestInternalSenderScalarFieldEnumSchema;
