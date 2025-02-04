import { z } from 'zod';

export const EmployeeLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'employeeId',
  'userId',
  'createdAt',
]);

export default EmployeeLogScalarFieldEnumSchema;
