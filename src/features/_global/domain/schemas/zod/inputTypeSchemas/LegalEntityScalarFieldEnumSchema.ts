import { z } from 'zod';

export const LegalEntityScalarFieldEnumSchema = z.enum([
  'id',
  'internalFolio',
  'legalFolio',
  'rut',
  'name',
  'entryDate',
  'constitutionDate',
  'law',
  'address',
  'phone',
  'email',
  'secondaryPhone',
  'secondaryEmail',
  'observations',
  'cityId',
  'legalEntitySubTypeId',
  'legalEntitySubTypeDenominationId',
  'legalEntityTypeId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default LegalEntityScalarFieldEnumSchema;
