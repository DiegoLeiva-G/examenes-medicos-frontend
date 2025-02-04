import { z } from 'zod';

export const SpecificPladecoScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'specificLine',
  'specificObjective',
  'strategicPladecoId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default SpecificPladecoScalarFieldEnumSchema;
