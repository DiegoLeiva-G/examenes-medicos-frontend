import { z } from 'zod';

export const LegalEntityDirectiveRoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'mandatory',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntityDirectiveRoleScalarFieldEnumSchema;
