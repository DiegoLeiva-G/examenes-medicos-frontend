import { z } from 'zod';

export const StrategicPladecoScalarFieldEnumSchema = z.enum([
  'id',
  'correlative',
  'strategicLine',
  'strategicObjective',
  'pladecoId',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default StrategicPladecoScalarFieldEnumSchema;
