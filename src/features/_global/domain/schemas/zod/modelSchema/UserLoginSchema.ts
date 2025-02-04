import { z } from 'zod';

/////////////////////////////////////////
// USER LOGIN SCHEMA
/////////////////////////////////////////

export const UserLoginSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  loginAt: z.coerce.date(),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;

/////////////////////////////////////////
// USER LOGIN PARTIAL SCHEMA
/////////////////////////////////////////

export const UserLoginPartialSchema = UserLoginSchema.partial();

export type UserLoginPartial = z.infer<typeof UserLoginPartialSchema>;

/////////////////////////////////////////
// USER LOGIN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserLoginOptionalDefaultsSchema = UserLoginSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    loginAt: z.coerce.date().optional(),
  }),
);

export type UserLoginOptionalDefaults = z.infer<typeof UserLoginOptionalDefaultsSchema>;

export default UserLoginSchema;
