import { z } from 'zod';

export const PlannerSubsidyLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'plannerSubsidyId',
  'userId',
  'createdAt',
]);

export default PlannerSubsidyLogScalarFieldEnumSchema;
