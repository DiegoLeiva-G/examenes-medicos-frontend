import { z } from 'zod';

export const PlannerSubsidyTaskLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerSubsidyTaskId',
  'userId',
  'createdAt',
]);

export default PlannerSubsidyTaskLogScalarFieldEnumSchema;
