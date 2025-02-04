import { MeasureUnitDatasourceImpl, MeasureUnitRepositoryImpl } from '../../infrastructure';
import {
  CreateMeasureUnit,
  DeleteMeasureUnit,
  GetMeasureUnitById,
  GetMeasureUnits,
  UpdateMeasureUnit,
} from '../../domain';

const measureUnitDatasourceImpl = new MeasureUnitDatasourceImpl();
const measureUnitRepositoryImpl = new MeasureUnitRepositoryImpl(measureUnitDatasourceImpl);

export const getMeasureUnits = new GetMeasureUnits(measureUnitRepositoryImpl);
export const getMeasureUnitById = new GetMeasureUnitById(measureUnitRepositoryImpl);
export const createMeasureUnit = new CreateMeasureUnit(measureUnitRepositoryImpl);
export const updateMeasureUnit = new UpdateMeasureUnit(measureUnitRepositoryImpl);
export const deleteMeasureUnit = new DeleteMeasureUnit(measureUnitRepositoryImpl);
