import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  legalEntityTypeId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntitySubType = z.infer<typeof LegalEntitySubTypeSchema>;

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypePartialSchema = LegalEntitySubTypeSchema.partial();

export type LegalEntitySubTypePartial = z.infer<typeof LegalEntitySubTypePartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypeOptionalDefaultsSchema = LegalEntitySubTypeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntitySubTypeOptionalDefaults = z.infer<typeof LegalEntitySubTypeOptionalDefaultsSchema>;

export default LegalEntitySubTypeSchema;
