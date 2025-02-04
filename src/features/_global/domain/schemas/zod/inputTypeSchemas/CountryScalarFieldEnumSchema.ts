import { z } from 'zod';

export const CountryScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'nationality', 'demonym']);

export default CountryScalarFieldEnumSchema;
