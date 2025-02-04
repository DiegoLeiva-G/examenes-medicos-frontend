import { z } from 'zod';

export const MeasureUnitScalarFieldEnumSchema = z.enum(['id', 'name', 'enabled', 'archived', 'createdAt', 'updatedAt']);

export default MeasureUnitScalarFieldEnumSchema;
