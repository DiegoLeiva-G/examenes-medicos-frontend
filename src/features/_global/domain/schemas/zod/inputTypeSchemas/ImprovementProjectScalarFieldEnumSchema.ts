import { z } from 'zod';

export const ImprovementProjectScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'directorateResponsibleCodeReference',
  'startDate',
  'endDate',
  'legalNorms',
  'fundingSourceId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default ImprovementProjectScalarFieldEnumSchema;
