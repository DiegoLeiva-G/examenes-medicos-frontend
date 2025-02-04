import { z } from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'shortName',
  'app',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default OrganizationScalarFieldEnumSchema;
