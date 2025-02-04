import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// MEASURE UNIT LOG SCHEMA
/////////////////////////////////////////

export const MeasureUnitLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  measureUnitId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type MeasureUnitLog = z.infer<typeof MeasureUnitLogSchema>;

/////////////////////////////////////////
// MEASURE UNIT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const MeasureUnitLogPartialSchema = MeasureUnitLogSchema.partial();

export type MeasureUnitLogPartial = z.infer<typeof MeasureUnitLogPartialSchema>;

/////////////////////////////////////////
// MEASURE UNIT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MeasureUnitLogOptionalDefaultsSchema = MeasureUnitLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type MeasureUnitLogOptionalDefaults = z.infer<typeof MeasureUnitLogOptionalDefaultsSchema>;

export default MeasureUnitLogSchema;
