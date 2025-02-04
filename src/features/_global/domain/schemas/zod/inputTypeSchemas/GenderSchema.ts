import { z } from 'zod';

export const GenderSchema = z.enum(['Male', 'Female', 'UNKNOW']);

export type GenderType = `${z.infer<typeof GenderSchema>}`;

export default GenderSchema;
