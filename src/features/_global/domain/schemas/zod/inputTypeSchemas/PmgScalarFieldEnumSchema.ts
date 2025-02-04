import { z } from 'zod';

export const PmgScalarFieldEnumSchema = z.enum([
  'id',
  'directorateCodeReference',
  'year',
  'status',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PmgScalarFieldEnumSchema;
