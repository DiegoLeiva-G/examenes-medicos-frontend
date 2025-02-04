import { z } from 'zod';

export const PlannerSubsidyScalarFieldEnumSchema = z.enum([
  'id',
  'managementAreaCodeReference',
  'directorateCodeReference',
  'costCenterCodeReference',
  'observation',
  'plannerId',
  'archived',
  'createdAt',
]);

export default PlannerSubsidyScalarFieldEnumSchema;
