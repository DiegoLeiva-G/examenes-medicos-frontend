import { z } from 'zod';

export const CitizenRequestTypeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'responseDays',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default CitizenRequestTypeScalarFieldEnumSchema;
