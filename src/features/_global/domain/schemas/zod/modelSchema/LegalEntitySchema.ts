import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY SCHEMA
/////////////////////////////////////////

export const LegalEntitySchema = z.object({
  id: z.string().cuid(),
  internalFolio: z.string(),
  legalFolio: z.string().nullish(),
  rut: z.string().nullish(),
  name: z.string(),
  entryDate: z.coerce.date(),
  constitutionDate: z.coerce.date().nullish(),
  law: z.string().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  secondaryPhone: z.string().nullish(),
  secondaryEmail: z.string().nullish(),
  observations: z.string().nullish(),
  cityId: z.string().nullish(),
  legalEntitySubTypeId: z.string().nullish(),
  legalEntitySubTypeDenominationId: z.string().nullish(),
  legalEntityTypeId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntity = z.infer<typeof LegalEntitySchema>;

/////////////////////////////////////////
// LEGAL ENTITY PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntityPartialSchema = LegalEntitySchema.partial();

export type LegalEntityPartial = z.infer<typeof LegalEntityPartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntityOptionalDefaultsSchema = LegalEntitySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntityOptionalDefaults = z.infer<typeof LegalEntityOptionalDefaultsSchema>;

export default LegalEntitySchema;
