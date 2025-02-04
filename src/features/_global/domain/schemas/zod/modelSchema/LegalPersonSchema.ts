import { z } from 'zod';

/////////////////////////////////////////
// LEGAL PERSON SCHEMA
/////////////////////////////////////////

export const LegalPersonSchema = z.object({
  id: z.string().cuid(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  cityId: z.string().nullish(),
  personId: z.string().nullish(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalPerson = z.infer<typeof LegalPersonSchema>;

/////////////////////////////////////////
// LEGAL PERSON PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalPersonPartialSchema = LegalPersonSchema.partial();

export type LegalPersonPartial = z.infer<typeof LegalPersonPartialSchema>;

/////////////////////////////////////////
// LEGAL PERSON OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalPersonOptionalDefaultsSchema = LegalPersonSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalPersonOptionalDefaults = z.infer<typeof LegalPersonOptionalDefaultsSchema>;

export default LegalPersonSchema;
