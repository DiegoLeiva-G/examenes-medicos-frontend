import { z } from 'zod';

export const DepartmentLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'departmentId',
  'userId',
  'createdAt',
]);

export default DepartmentLogScalarFieldEnumSchema;
