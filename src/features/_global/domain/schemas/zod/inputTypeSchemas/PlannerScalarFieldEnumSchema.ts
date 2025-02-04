import { z } from 'zod';

export const PlannerScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'year',
  'startDate',
  'endDate',
  'investmentInitiativeId',
  'improvementProjectId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PlannerScalarFieldEnumSchema;
