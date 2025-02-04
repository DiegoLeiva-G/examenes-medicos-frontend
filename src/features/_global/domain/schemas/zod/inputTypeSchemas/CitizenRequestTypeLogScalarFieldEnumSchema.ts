import { z } from 'zod';

export const CitizenRequestTypeLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'citizenRequestTypeId',
  'userId',
  'createdAt',
]);

export default CitizenRequestTypeLogScalarFieldEnumSchema;
