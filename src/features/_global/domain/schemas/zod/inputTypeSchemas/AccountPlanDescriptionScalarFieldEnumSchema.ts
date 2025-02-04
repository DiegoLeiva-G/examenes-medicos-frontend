import { z } from 'zod';

export const AccountPlanDescriptionScalarFieldEnumSchema = z.enum([
  'id',
  'accountCodeReference',
  'description',
  'organizationId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default AccountPlanDescriptionScalarFieldEnumSchema;
