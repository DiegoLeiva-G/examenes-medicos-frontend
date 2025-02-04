import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE ROLE SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveRoleSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  mandatory: z.boolean(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntityDirectiveRole = z.infer<typeof LegalEntityDirectiveRoleSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveRolePartialSchema = LegalEntityDirectiveRoleSchema.partial();

export type LegalEntityDirectiveRolePartial = z.infer<typeof LegalEntityDirectiveRolePartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveRoleOptionalDefaultsSchema = LegalEntityDirectiveRoleSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    mandatory: z.boolean().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntityDirectiveRoleOptionalDefaults = z.infer<typeof LegalEntityDirectiveRoleOptionalDefaultsSchema>;

export default LegalEntityDirectiveRoleSchema;
