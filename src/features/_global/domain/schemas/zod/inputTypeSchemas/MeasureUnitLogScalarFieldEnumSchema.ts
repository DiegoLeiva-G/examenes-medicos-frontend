import { z } from 'zod';

export const MeasureUnitLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'measureUnitId',
  'userId',
  'createdAt',
]);

export default MeasureUnitLogScalarFieldEnumSchema;
