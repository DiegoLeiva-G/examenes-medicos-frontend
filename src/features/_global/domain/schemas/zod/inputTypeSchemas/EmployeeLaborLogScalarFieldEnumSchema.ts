import { z } from 'zod';

export const EmployeeLaborLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'employeeLaborId',
  'userId',
  'createdAt',
]);

export default EmployeeLaborLogScalarFieldEnumSchema;
