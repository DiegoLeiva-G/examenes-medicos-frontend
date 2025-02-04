import { z } from 'zod';

export const EmployeeRoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default EmployeeRoleScalarFieldEnumSchema;
