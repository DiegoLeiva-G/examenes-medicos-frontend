import { type MeasureUnitEntity, type MeasureUnitFormEntity, type MeasureUnitSummaryEntity } from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class MeasureUnitDatasource {
  abstract getMeasureUnits(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MeasureUnitSummaryEntity[]>>>;
  abstract getMeasureUnitById(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>>;
  abstract createMeasureUnit(data: Omit<MeasureUnitFormEntity, 'id'>): Promise<IApiResponse<MeasureUnitSummaryEntity>>;
  abstract updateMeasureUnit(data: Partial<MeasureUnitFormEntity>): Promise<IApiResponse<MeasureUnitSummaryEntity>>;
  abstract deleteMeasureUnit(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>>;
}
