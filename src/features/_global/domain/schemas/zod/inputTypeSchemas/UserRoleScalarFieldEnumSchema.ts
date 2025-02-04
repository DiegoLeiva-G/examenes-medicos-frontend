import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'appId',
  'assignedPermissions',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default UserRoleScalarFieldEnumSchema;
