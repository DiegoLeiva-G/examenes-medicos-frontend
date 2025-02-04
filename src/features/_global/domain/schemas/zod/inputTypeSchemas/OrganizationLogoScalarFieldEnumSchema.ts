import { z } from 'zod';

export const OrganizationLogoScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'attachment',
  'organizationId',
  'enabled',
  'archived',
  'createdAt',
]);

export default OrganizationLogoScalarFieldEnumSchema;
