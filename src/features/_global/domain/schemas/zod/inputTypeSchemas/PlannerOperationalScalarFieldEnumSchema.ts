import { z } from 'zod';

export const PlannerOperationalScalarFieldEnumSchema = z.enum(['id', 'plannerId', 'archived', 'createdAt']);

export default PlannerOperationalScalarFieldEnumSchema;
