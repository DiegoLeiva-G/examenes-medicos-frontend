import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// PERSON LOG SCHEMA
/////////////////////////////////////////

export const PersonLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  personId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PersonLog = z.infer<typeof PersonLogSchema>;

/////////////////////////////////////////
// PERSON LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PersonLogPartialSchema = PersonLogSchema.partial();

export type PersonLogPartial = z.infer<typeof PersonLogPartialSchema>;

/////////////////////////////////////////
// PERSON LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PersonLogOptionalDefaultsSchema = PersonLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PersonLogOptionalDefaults = z.infer<typeof PersonLogOptionalDefaultsSchema>;

export default PersonLogSchema;
