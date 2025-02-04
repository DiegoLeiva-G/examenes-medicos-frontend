import { z } from 'zod';

export const FundingSourceScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'type',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default FundingSourceScalarFieldEnumSchema;
