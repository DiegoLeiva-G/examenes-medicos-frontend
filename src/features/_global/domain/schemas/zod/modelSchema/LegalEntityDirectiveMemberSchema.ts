import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE MEMBER SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveMemberSchema = z.object({
  id: z.string().cuid(),
  legalEntityDirectiveId: z.string(),
  legalPersonId: z.string(),
  legalEntityRoleId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntityDirectiveMember = z.infer<typeof LegalEntityDirectiveMemberSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE MEMBER PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveMemberPartialSchema = LegalEntityDirectiveMemberSchema.partial();

export type LegalEntityDirectiveMemberPartial = z.infer<typeof LegalEntityDirectiveMemberPartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY DIRECTIVE MEMBER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntityDirectiveMemberOptionalDefaultsSchema = LegalEntityDirectiveMemberSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntityDirectiveMemberOptionalDefaults = z.infer<
  typeof LegalEntityDirectiveMemberOptionalDefaultsSchema
>;

export default LegalEntityDirectiveMemberSchema;
