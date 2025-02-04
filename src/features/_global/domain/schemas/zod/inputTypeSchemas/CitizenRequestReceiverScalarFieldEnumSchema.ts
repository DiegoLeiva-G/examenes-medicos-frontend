import { z } from 'zod';

export const CitizenRequestReceiverScalarFieldEnumSchema = z.enum([
  'id',
  'directorateCodeReference',
  'departmentId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestReceiverScalarFieldEnumSchema;
