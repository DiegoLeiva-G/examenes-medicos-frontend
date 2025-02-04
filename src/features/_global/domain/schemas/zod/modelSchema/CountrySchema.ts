import { z } from 'zod';

/////////////////////////////////////////
// COUNTRY SCHEMA
/////////////////////////////////////////

export const CountrySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  code: z.string(),
  nationality: z.string(),
  demonym: z.string().nullish(),
});

export type Country = z.infer<typeof CountrySchema>;

/////////////////////////////////////////
// COUNTRY PARTIAL SCHEMA
/////////////////////////////////////////

export const CountryPartialSchema = CountrySchema.partial();

export type CountryPartial = z.infer<typeof CountryPartialSchema>;

/////////////////////////////////////////
// COUNTRY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CountryOptionalDefaultsSchema = CountrySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
  }),
);

export type CountryOptionalDefaults = z.infer<typeof CountryOptionalDefaultsSchema>;

export default CountrySchema;
