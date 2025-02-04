import { z } from 'zod';

/////////////////////////////////////////
// STRATEGIC PLADECO SCHEMA
/////////////////////////////////////////

export const StrategicPladecoSchema = z.object({
  id: z.string().cuid(),
  correlative: z.number().int().nullish(),
  strategicLine: z.string(),
  strategicObjective: z.string(),
  pladecoId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type StrategicPladeco = z.infer<typeof StrategicPladecoSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO PARTIAL SCHEMA
/////////////////////////////////////////

export const StrategicPladecoPartialSchema = StrategicPladecoSchema.partial();

export type StrategicPladecoPartial = z.infer<typeof StrategicPladecoPartialSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StrategicPladecoOptionalDefaultsSchema = StrategicPladecoSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type StrategicPladecoOptionalDefaults = z.infer<typeof StrategicPladecoOptionalDefaultsSchema>;

export default StrategicPladecoSchema;
