import { z } from 'zod';

/////////////////////////////////////////
// STATE SCHEMA
/////////////////////////////////////////

export const StateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  code: z.string(),
  correlative: z.number().int().nullish(),
  countryId: z.string(),
});

export type State = z.infer<typeof StateSchema>;

/////////////////////////////////////////
// STATE PARTIAL SCHEMA
/////////////////////////////////////////

export const StatePartialSchema = StateSchema.partial();

export type StatePartial = z.infer<typeof StatePartialSchema>;

/////////////////////////////////////////
// STATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StateOptionalDefaultsSchema = StateSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
  }),
);

export type StateOptionalDefaults = z.infer<typeof StateOptionalDefaultsSchema>;

export default StateSchema;
