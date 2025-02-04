import { z } from 'zod';

/////////////////////////////////////////
// ORGANIZATION LOGO SCHEMA
/////////////////////////////////////////

export const OrganizationLogoSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  attachment: z.string(),
  organizationId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type OrganizationLogo = z.infer<typeof OrganizationLogoSchema>;

/////////////////////////////////////////
// ORGANIZATION LOGO PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationLogoPartialSchema = OrganizationLogoSchema.partial();

export type OrganizationLogoPartial = z.infer<typeof OrganizationLogoPartialSchema>;

/////////////////////////////////////////
// ORGANIZATION LOGO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrganizationLogoOptionalDefaultsSchema = OrganizationLogoSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type OrganizationLogoOptionalDefaults = z.infer<typeof OrganizationLogoOptionalDefaultsSchema>;

export default OrganizationLogoSchema;
