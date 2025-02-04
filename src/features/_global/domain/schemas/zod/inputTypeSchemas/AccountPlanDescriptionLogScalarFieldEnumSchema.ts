import { z } from 'zod';

export const AccountPlanDescriptionLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'accountPlanDescriptionId',
  'userId',
  'createdAt',
]);

export default AccountPlanDescriptionLogScalarFieldEnumSchema;
