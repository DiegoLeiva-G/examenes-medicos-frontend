import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// FUNDING SOURCE LOG SCHEMA
/////////////////////////////////////////

export const FundingSourceLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  fundingSourceId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type FundingSourceLog = z.infer<typeof FundingSourceLogSchema>;

/////////////////////////////////////////
// FUNDING SOURCE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const FundingSourceLogPartialSchema = FundingSourceLogSchema.partial();

export type FundingSourceLogPartial = z.infer<typeof FundingSourceLogPartialSchema>;

/////////////////////////////////////////
// FUNDING SOURCE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FundingSourceLogOptionalDefaultsSchema = FundingSourceLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type FundingSourceLogOptionalDefaults = z.infer<typeof FundingSourceLogOptionalDefaultsSchema>;

export default FundingSourceLogSchema;
