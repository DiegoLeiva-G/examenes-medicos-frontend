import { MeasureUnitPartialSchema } from '../../../_global';

export const updateMeasureUnitSchema = MeasureUnitPartialSchema.omit({
  archived: true,
  createdAt: true,
  updatedAt: true,
});
