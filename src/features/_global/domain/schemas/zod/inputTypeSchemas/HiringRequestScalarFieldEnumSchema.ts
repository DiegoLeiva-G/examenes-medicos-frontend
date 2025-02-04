import { z } from 'zod';

export const HiringRequestScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'date',
  'directorateCodeReference',
  'justification',
  'status',
  'departmentId',
  'investmentInitiativeId',
  'improvementProjectId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default HiringRequestScalarFieldEnumSchema;
