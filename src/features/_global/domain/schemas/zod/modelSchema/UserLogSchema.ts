import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// USER LOG SCHEMA
/////////////////////////////////////////

export const UserLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  userId: z.string().nullish(),
  internalUserLogId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type UserLog = z.infer<typeof UserLogSchema>;

/////////////////////////////////////////
// USER LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const UserLogPartialSchema = UserLogSchema.partial();

export type UserLogPartial = z.infer<typeof UserLogPartialSchema>;

/////////////////////////////////////////
// USER LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserLogOptionalDefaultsSchema = UserLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type UserLogOptionalDefaults = z.infer<typeof UserLogOptionalDefaultsSchema>;

export default UserLogSchema;
