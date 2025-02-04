import { z } from 'zod';

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  shortName: z.string().nullish(),
  app: z.string().array(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Organization = z.infer<typeof OrganizationSchema>;

/////////////////////////////////////////
// ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationPartialSchema = OrganizationSchema.partial();

export type OrganizationPartial = z.infer<typeof OrganizationPartialSchema>;

/////////////////////////////////////////
// ORGANIZATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrganizationOptionalDefaultsSchema = OrganizationSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type OrganizationOptionalDefaults = z.infer<typeof OrganizationOptionalDefaultsSchema>;

export default OrganizationSchema;
