import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveSchema = z.object({
  id: z.string().cuid(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  legalEntityId: z.string().nullish(),
  currentLegalEntityId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntityDirective = z.infer<typeof LegalEntityDirectiveSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectivePartialSchema = LegalEntityDirectiveSchema.partial();

export type LegalEntityDirectivePartial = z.infer<typeof LegalEntityDirectivePartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveOptionalDefaultsSchema = LegalEntityDirectiveSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntityDirectiveOptionalDefaults = z.infer<typeof LegalEntityDirectiveOptionalDefaultsSchema>;

export default LegalEntityDirectiveSchema;
