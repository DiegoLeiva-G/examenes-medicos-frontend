import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'username',
  'password',
  'tag',
  'root',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default UserScalarFieldEnumSchema;
