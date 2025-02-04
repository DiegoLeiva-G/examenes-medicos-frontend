import { z } from 'zod';

export const UserLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'userId',
  'internalUserLogId',
  'createdAt',
]);

export default UserLogScalarFieldEnumSchema;
