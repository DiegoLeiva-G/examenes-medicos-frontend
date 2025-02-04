import { z } from 'zod';

export const ImprovementProjectLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'improvementProjectId',
  'userId',
  'createdAt',
]);

export default ImprovementProjectLogScalarFieldEnumSchema;
