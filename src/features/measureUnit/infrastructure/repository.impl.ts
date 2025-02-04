import {
  type MeasureUnitDatasource,
  type MeasureUnitEntity,
  type MeasureUnitFormEntity,
  type MeasureUnitRepository,
  type MeasureUnitSummaryEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MeasureUnitRepositoryImpl implements MeasureUnitRepository {
  constructor(private readonly datasource: MeasureUnitDatasource) {}

  public async getMeasureUnits(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MeasureUnitSummaryEntity[]>>> {
    return await this.datasource.getMeasureUnits(filters);
  }

  public async getMeasureUnitById(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.datasource.getMeasureUnitById(id);
  }

  public async createMeasureUnit(
    data: Omit<MeasureUnitFormEntity, 'id'>,
  ): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.datasource.createMeasureUnit(data);
  }

  public async updateMeasureUnit(
    data: Partial<MeasureUnitFormEntity>,
  ): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.datasource.updateMeasureUnit(data);
  }

  public async deleteMeasureUnit(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.datasource.deleteMeasureUnit(id);
  }
}
