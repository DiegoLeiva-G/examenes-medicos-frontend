import { z } from 'zod';
import { FundingSourceTypeSchema } from '../inputTypeSchemas/FundingSourceTypeSchema';

/////////////////////////////////////////
// FUNDING SOURCE SCHEMA
/////////////////////////////////////////

export const FundingSourceSchema = z.object({
  type: FundingSourceTypeSchema,
  id: z.string().cuid(),
  name: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type FundingSource = z.infer<typeof FundingSourceSchema>;

/////////////////////////////////////////
// FUNDING SOURCE PARTIAL SCHEMA
/////////////////////////////////////////

export const FundingSourcePartialSchema = FundingSourceSchema.partial();

export type FundingSourcePartial = z.infer<typeof FundingSourcePartialSchema>;

/////////////////////////////////////////
// FUNDING SOURCE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FundingSourceOptionalDefaultsSchema = FundingSourceSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type FundingSourceOptionalDefaults = z.infer<typeof FundingSourceOptionalDefaultsSchema>;

export default FundingSourceSchema;
