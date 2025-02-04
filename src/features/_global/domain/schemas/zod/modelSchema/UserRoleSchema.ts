import { z } from 'zod';

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  appId: z.string(),
  assignedPermissions: z.string().array(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type UserRole = z.infer<typeof UserRoleSchema>;

/////////////////////////////////////////
// USER ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const UserRolePartialSchema = UserRoleSchema.partial();

export type UserRolePartial = z.infer<typeof UserRolePartialSchema>;

/////////////////////////////////////////
// USER ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserRoleOptionalDefaultsSchema = UserRoleSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type UserRoleOptionalDefaults = z.infer<typeof UserRoleOptionalDefaultsSchema>;

export default UserRoleSchema;
