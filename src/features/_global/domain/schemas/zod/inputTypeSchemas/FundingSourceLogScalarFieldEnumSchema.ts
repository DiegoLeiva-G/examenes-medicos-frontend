import { z } from 'zod';

export const FundingSourceLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'fundingSourceId',
  'userId',
  'createdAt',
]);

export default FundingSourceLogScalarFieldEnumSchema;
