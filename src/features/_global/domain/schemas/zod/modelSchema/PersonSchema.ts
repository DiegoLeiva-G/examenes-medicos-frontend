import { z } from 'zod';
import { GenderSchema } from '../inputTypeSchemas/GenderSchema';

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  gender: GenderSchema.nullish(),
  id: z.string().cuid(),
  rut: z.string(),
  name: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  secondaryLastName: z.string().nullish(),
  birthdate: z.coerce.date().nullish(),
  nationalityId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Person = z.infer<typeof PersonSchema>;

/////////////////////////////////////////
// PERSON PARTIAL SCHEMA
/////////////////////////////////////////

export const PersonPartialSchema = PersonSchema.partial();

export type PersonPartial = z.infer<typeof PersonPartialSchema>;

/////////////////////////////////////////
// PERSON OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PersonOptionalDefaultsSchema = PersonSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PersonOptionalDefaults = z.infer<typeof PersonOptionalDefaultsSchema>;

export default PersonSchema;
