import { MeasureUnitOptionalDefaultsSchema } from '../../../_global';

export const createMeasureUnitSchema = MeasureUnitOptionalDefaultsSchema.omit({
  id: true,
  archived: true,
  createdAt: true,
  updatedAt: true,
});
