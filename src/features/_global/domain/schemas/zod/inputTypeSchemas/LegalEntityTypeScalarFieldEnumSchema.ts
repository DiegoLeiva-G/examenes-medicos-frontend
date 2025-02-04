import { z } from 'zod';

export const LegalEntityTypeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'allowCitizenRequest',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntityTypeScalarFieldEnumSchema;
