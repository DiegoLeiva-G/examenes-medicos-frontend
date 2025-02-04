import { z } from 'zod';

/////////////////////////////////////////
// INVESTMENT INITIATIVE SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  directorateResponsibleCodeReference: z.number().int().nullish(),
  directorateCoResponsibleCodeReference: z.number().int().array(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  legalNorms: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type InvestmentInitiative = z.infer<typeof InvestmentInitiativeSchema>;

/////////////////////////////////////////
// INVESTMENT INITIATIVE PARTIAL SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativePartialSchema = InvestmentInitiativeSchema.partial();

export type InvestmentInitiativePartial = z.infer<typeof InvestmentInitiativePartialSchema>;

/////////////////////////////////////////
// INVESTMENT INITIATIVE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvestmentInitiativeOptionalDefaultsSchema = InvestmentInitiativeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type InvestmentInitiativeOptionalDefaults = z.infer<typeof InvestmentInitiativeOptionalDefaultsSchema>;

export default InvestmentInitiativeSchema;
