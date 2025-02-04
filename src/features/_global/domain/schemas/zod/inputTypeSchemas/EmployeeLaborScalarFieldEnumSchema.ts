import { z } from 'zod';

export const EmployeeLaborScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default EmployeeLaborScalarFieldEnumSchema;
