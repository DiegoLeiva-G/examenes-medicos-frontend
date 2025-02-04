import { z } from 'zod';

export const LegalPersonScalarFieldEnumSchema = z.enum([
  'id',
  'address',
  'phone',
  'email',
  'cityId',
  'personId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalPersonScalarFieldEnumSchema;
