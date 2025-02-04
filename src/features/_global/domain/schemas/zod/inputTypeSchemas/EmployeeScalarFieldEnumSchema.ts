import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum([
  'id',
  'address',
  'phone',
  'email',
  'studyLevel',
  'studyDescription',
  'personId',
  'userId',
  'cityId',
  'employeeRoleId',
  'employeeLaborId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default EmployeeScalarFieldEnumSchema;
