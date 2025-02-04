import { z } from 'zod';

export const CitizenRequestDerivedScalarFieldEnumSchema = z.enum([
  'id',
  'isRead',
  'directorateCodeReference',
  'departmentId',
  'citizenRequestId',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestDerivedScalarFieldEnumSchema;
