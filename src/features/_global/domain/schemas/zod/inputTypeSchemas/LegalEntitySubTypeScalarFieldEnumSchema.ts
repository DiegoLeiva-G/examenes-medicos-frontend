import { z } from 'zod';

export const LegalEntitySubTypeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'legalEntityTypeId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntitySubTypeScalarFieldEnumSchema;
