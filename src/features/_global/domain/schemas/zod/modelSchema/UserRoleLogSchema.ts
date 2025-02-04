import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// USER ROLE LOG SCHEMA
/////////////////////////////////////////

export const UserRoleLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  userId: z.string().nullish(),
  userRoleId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type UserRoleLog = z.infer<typeof UserRoleLogSchema>;

/////////////////////////////////////////
// USER ROLE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const UserRoleLogPartialSchema = UserRoleLogSchema.partial();

export type UserRoleLogPartial = z.infer<typeof UserRoleLogPartialSchema>;

/////////////////////////////////////////
// USER ROLE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserRoleLogOptionalDefaultsSchema = UserRoleLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type UserRoleLogOptionalDefaults = z.infer<typeof UserRoleLogOptionalDefaultsSchema>;

export default UserRoleLogSchema;
