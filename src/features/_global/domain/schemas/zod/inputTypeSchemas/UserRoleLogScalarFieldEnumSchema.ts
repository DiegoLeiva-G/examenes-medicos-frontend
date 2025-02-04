import { z } from 'zod';

export const UserRoleLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'userId',
  'userRoleId',
  'createdAt',
]);

export default UserRoleLogScalarFieldEnumSchema;
