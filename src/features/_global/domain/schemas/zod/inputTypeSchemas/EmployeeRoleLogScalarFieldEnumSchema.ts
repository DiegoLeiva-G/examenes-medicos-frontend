import { z } from 'zod';

export const EmployeeRoleLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'employeeRoleId',
  'userId',
  'createdAt',
]);

export default EmployeeRoleLogScalarFieldEnumSchema;
