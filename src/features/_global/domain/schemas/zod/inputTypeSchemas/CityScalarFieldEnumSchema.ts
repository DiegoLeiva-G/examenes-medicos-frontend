import { z } from 'zod';

export const CityScalarFieldEnumSchema = z.enum(['id', 'name', 'subStateId', 'archived', 'createdAt', 'updatedAt']);

export default CityScalarFieldEnumSchema;
