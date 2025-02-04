import { z } from 'zod';

export const SubStateScalarFieldEnumSchema = z.enum(['id', 'name', 'stateId']);

export default SubStateScalarFieldEnumSchema;
