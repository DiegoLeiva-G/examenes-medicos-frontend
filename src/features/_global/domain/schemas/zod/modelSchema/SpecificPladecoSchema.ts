import { z } from 'zod';

/////////////////////////////////////////
// SPECIFIC PLADECO SCHEMA
/////////////////////////////////////////

export const SpecificPladecoSchema = z.object({
  id: z.string().cuid(),
  correlative: z.number().int().nullish(),
  specificLine: z.string(),
  specificObjective: z.string(),
  strategicPladecoId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type SpecificPladeco = z.infer<typeof SpecificPladecoSchema>;

/////////////////////////////////////////
// SPECIFIC PLADECO PARTIAL SCHEMA
/////////////////////////////////////////

export const SpecificPladecoPartialSchema = SpecificPladecoSchema.partial();

export type SpecificPladecoPartial = z.infer<typeof SpecificPladecoPartialSchema>;

/////////////////////////////////////////
// SPECIFIC PLADECO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SpecificPladecoOptionalDefaultsSchema = SpecificPladecoSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type SpecificPladecoOptionalDefaults = z.infer<typeof SpecificPladecoOptionalDefaultsSchema>;

export default SpecificPladecoSchema;
