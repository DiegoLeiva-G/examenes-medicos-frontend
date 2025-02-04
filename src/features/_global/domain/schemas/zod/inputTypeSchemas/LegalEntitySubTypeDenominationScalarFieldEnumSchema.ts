import { z } from 'zod';

export const LegalEntitySubTypeDenominationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'alias',
  'legalEntitySubTypeId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntitySubTypeDenominationScalarFieldEnumSchema;
