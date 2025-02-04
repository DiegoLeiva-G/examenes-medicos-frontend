import { z } from 'zod';

export const StateScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'correlative', 'countryId']);

export default StateScalarFieldEnumSchema;
