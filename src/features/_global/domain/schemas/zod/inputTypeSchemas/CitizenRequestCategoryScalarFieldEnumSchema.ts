import { z } from 'zod';

export const CitizenRequestCategoryScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'directorateReferenceCode',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestCategoryScalarFieldEnumSchema;
