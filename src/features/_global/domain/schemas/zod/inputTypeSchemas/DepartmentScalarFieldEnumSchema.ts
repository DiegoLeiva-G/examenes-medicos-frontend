import { z } from 'zod';

export const DepartmentScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'directorateCodeReference',
  'description',
  'correlative',
  'code',
  'subDepartmentId',
  'employeeResponsibleId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default DepartmentScalarFieldEnumSchema;
