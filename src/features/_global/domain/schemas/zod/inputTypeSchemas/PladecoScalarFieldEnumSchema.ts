import { z } from 'zod';

export const PladecoScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'startDate',
  'endDate',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default PladecoScalarFieldEnumSchema;
