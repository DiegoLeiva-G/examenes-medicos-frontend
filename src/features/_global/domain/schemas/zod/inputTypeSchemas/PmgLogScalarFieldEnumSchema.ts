import { z } from 'zod';

export const PmgLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'status',
  'observations',
  'ip',
  'userId',
  'pmgId',
  'createdAt',
]);

export default PmgLogScalarFieldEnumSchema;
