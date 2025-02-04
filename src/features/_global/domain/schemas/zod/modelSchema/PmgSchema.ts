import { z } from 'zod';
import { PmgStatusSchema } from '../inputTypeSchemas/PmgStatusSchema';

/////////////////////////////////////////
// PMG SCHEMA
/////////////////////////////////////////

export const PmgSchema = z.object({
  status: PmgStatusSchema,
  id: z.string().cuid(),
  directorateCodeReference: z.number().int(),
  year: z.number().int(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Pmg = z.infer<typeof PmgSchema>;

/////////////////////////////////////////
// PMG PARTIAL SCHEMA
/////////////////////////////////////////

export const PmgPartialSchema = PmgSchema.partial();

export type PmgPartial = z.infer<typeof PmgPartialSchema>;

/////////////////////////////////////////
// PMG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PmgOptionalDefaultsSchema = PmgSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PmgOptionalDefaults = z.infer<typeof PmgOptionalDefaultsSchema>;

export default PmgSchema;
