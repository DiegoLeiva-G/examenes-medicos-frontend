import { z } from 'zod';

/////////////////////////////////////////
// CITY SCHEMA
/////////////////////////////////////////

export const CitySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  subStateId: z.string(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type City = z.infer<typeof CitySchema>;

/////////////////////////////////////////
// CITY PARTIAL SCHEMA
/////////////////////////////////////////

export const CityPartialSchema = CitySchema.partial();

export type CityPartial = z.infer<typeof CityPartialSchema>;

/////////////////////////////////////////
// CITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CityOptionalDefaultsSchema = CitySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CityOptionalDefaults = z.infer<typeof CityOptionalDefaultsSchema>;

export default CitySchema;
