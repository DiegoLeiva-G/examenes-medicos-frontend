import { z } from 'zod';

export const LegalEntityDirectiveScalarFieldEnumSchema = z.enum([
  'id',
  'startDate',
  'endDate',
  'legalEntityId',
  'currentLegalEntityId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntityDirectiveScalarFieldEnumSchema;
