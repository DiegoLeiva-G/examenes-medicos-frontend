import { z } from 'zod';

export const DirectorateEmployeeLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'userId',
  'directorateEmployeeId',
  'createdAt',
]);

export default DirectorateEmployeeLogScalarFieldEnumSchema;
