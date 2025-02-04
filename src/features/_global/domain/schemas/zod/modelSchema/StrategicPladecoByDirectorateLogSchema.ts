import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE LOG SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectorateLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  strategicPladecoByDirectorateId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type StrategicPladecoByDirectorateLog = z.infer<typeof StrategicPladecoByDirectorateLogSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectorateLogPartialSchema = StrategicPladecoByDirectorateLogSchema.partial();

export type StrategicPladecoByDirectorateLogPartial = z.infer<typeof StrategicPladecoByDirectorateLogPartialSchema>;

/////////////////////////////////////////
// STRATEGIC PLADECO BY DIRECTORATE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StrategicPladecoByDirectorateLogOptionalDefaultsSchema = StrategicPladecoByDirectorateLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type StrategicPladecoByDirectorateLogOptionalDefaults = z.infer<
  typeof StrategicPladecoByDirectorateLogOptionalDefaultsSchema
>;

export default StrategicPladecoByDirectorateLogSchema;
