import { z } from 'zod';

export const TemplateIndependentWorkContractScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'year',
  'attachment',
  'type',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default TemplateIndependentWorkContractScalarFieldEnumSchema;
