import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY TYPE SCHEMA
/////////////////////////////////////////

export const LegalEntityTypeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullish(),
  allowCitizenRequest: z.boolean(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntityType = z.infer<typeof LegalEntityTypeSchema>;

/////////////////////////////////////////
// LEGAL ENTITY TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntityTypePartialSchema = LegalEntityTypeSchema.partial();

export type LegalEntityTypePartial = z.infer<typeof LegalEntityTypePartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY TYPE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntityTypeOptionalDefaultsSchema = LegalEntityTypeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    allowCitizenRequest: z.boolean().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntityTypeOptionalDefaults = z.infer<typeof LegalEntityTypeOptionalDefaultsSchema>;

export default LegalEntityTypeSchema;
