import { z } from 'zod';

export const DirectorateEmployeeScalarFieldEnumSchema = z.enum([
  'id',
  'directorateCodeReference',
  'employeeResponsibleId',
  'createdAt',
]);

export default DirectorateEmployeeScalarFieldEnumSchema;
