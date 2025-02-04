import { z } from 'zod';

export const PersonLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'personId',
  'userId',
  'createdAt',
]);

export default PersonLogScalarFieldEnumSchema;
