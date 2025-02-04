import { z } from 'zod';

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectorateSchema = z.object({
  id: z.string().cuid(),
  directorateCodeReference: z.number().int(),
  createdAt: z.coerce.date(),
});

export type StrategicPladecoByDirectorate = z.infer<typeof StrategicPladecoByDirectorateSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE PARTIAL SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectoratePartialSchema = StrategicPladecoByDirectorateSchema.partial();

export type StrategicPladecoByDirectoratePartial = z.infer<typeof StrategicPladecoByDirectoratePartialSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectorateOptionalDefaultsSchema = StrategicPladecoByDirectorateSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type StrategicPladecoByDirectorateOptionalDefaults = z.infer<
  typeof StrategicPladecoByDirectorateOptionalDefaultsSchema
>;

export default StrategicPladecoByDirectorateSchema;
