import { z } from 'zod';
import { UserTypeSchema } from '../inputTypeSchemas/UserTypeSchema';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  type: UserTypeSchema.nullish(),
  id: z.string().cuid(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  tag: z.string().nullish(),
  root: z.boolean(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial();

export type UserPartial = z.infer<typeof UserPartialSchema>;

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    root: z.boolean().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>;

export default UserSchema;
