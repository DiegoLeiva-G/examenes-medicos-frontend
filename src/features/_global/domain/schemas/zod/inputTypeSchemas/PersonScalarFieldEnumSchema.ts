import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum([
  'id',
  'rut',
  'name',
  'middleName',
  'lastName',
  'secondaryLastName',
  'birthdate',
  'gender',
  'nationalityId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PersonScalarFieldEnumSchema;
