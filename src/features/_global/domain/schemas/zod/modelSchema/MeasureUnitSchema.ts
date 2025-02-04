import { z } from 'zod';

/////////////////////////////////////////
// MEASURE UNIT SCHEMA
/////////////////////////////////////////

export const MeasureUnitSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type MeasureUnit = z.infer<typeof MeasureUnitSchema>;

/////////////////////////////////////////
// MEASURE UNIT PARTIAL SCHEMA
/////////////////////////////////////////

export const MeasureUnitPartialSchema = MeasureUnitSchema.partial();

export type MeasureUnitPartial = z.infer<typeof MeasureUnitPartialSchema>;

/////////////////////////////////////////
// MEASURE UNIT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MeasureUnitOptionalDefaultsSchema = MeasureUnitSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type MeasureUnitOptionalDefaults = z.infer<typeof MeasureUnitOptionalDefaultsSchema>;

export default MeasureUnitSchema;
