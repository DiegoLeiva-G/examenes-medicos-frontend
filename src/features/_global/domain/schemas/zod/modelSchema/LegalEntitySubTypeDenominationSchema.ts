import { z } from 'zod';

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE DENOMINATION SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypeDenominationSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  alias: z.string().nullish(),
  legalEntitySubTypeId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type LegalEntitySubTypeDenomination = z.infer<typeof LegalEntitySubTypeDenominationSchema>;

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE DENOMINATION PARTIAL SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypeDenominationPartialSchema = LegalEntitySubTypeDenominationSchema.partial();

export type LegalEntitySubTypeDenominationPartial = z.infer<typeof LegalEntitySubTypeDenominationPartialSchema>;

/////////////////////////////////////////
// LEGAL ENTITY SUB TYPE DENOMINATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LegalEntitySubTypeDenominationOptionalDefaultsSchema = LegalEntitySubTypeDenominationSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type LegalEntitySubTypeDenominationOptionalDefaults = z.infer<
  typeof LegalEntitySubTypeDenominationOptionalDefaultsSchema
>;

export default LegalEntitySubTypeDenominationSchema;
