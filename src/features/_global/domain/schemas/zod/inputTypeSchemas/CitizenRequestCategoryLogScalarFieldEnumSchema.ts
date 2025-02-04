import { z } from 'zod';

export const CitizenRequestCategoryLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'citizenRequestCategoryId',
  'userId',
  'createdAt',
]);

export default CitizenRequestCategoryLogScalarFieldEnumSchema;
