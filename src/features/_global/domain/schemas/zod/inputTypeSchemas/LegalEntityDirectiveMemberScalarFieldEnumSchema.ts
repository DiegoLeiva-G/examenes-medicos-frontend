import { z } from 'zod';

export const LegalEntityDirectiveMemberScalarFieldEnumSchema = z.enum([
  'id',
  'legalEntityDirectiveId',
  'legalPersonId',
  'legalEntityRoleId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntityDirectiveMemberScalarFieldEnumSchema;
