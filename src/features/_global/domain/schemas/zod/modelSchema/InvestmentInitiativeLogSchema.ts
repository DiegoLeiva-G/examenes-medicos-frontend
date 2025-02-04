import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// INVESTMENT INITIATIVE LOG SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativeLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  investmentInitiativeId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type InvestmentInitiativeLog = z.infer<typeof InvestmentInitiativeLogSchema>;

/////////////////////////////////////////
// INVESTMENT INITIATIVE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativeLogPartialSchema = InvestmentInitiativeLogSchema.partial();

export type InvestmentInitiativeLogPartial = z.infer<typeof InvestmentInitiativeLogPartialSchema>;

/////////////////////////////////////////
// INVESTMENT INITIATIVE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativeLogOptionalDefaultsSchema = InvestmentInitiativeLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type InvestmentInitiativeLogOptionalDefaults = z.infer<typeof InvestmentInitiativeLogOptionalDefaultsSchema>;

export default InvestmentInitiativeLogSchema;
