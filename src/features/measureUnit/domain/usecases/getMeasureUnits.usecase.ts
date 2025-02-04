import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type MeasureUnitSummaryEntity } from '../entities';
import { type MeasureUnitRepository } from '../repositories';

export interface GetMeasureUnitsUseCase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<MeasureUnitSummaryEntity[]>>>;
}

export class GetMeasureUnits implements GetMeasureUnitsUseCase {
  constructor(private readonly repository: MeasureUnitRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<MeasureUnitSummaryEntity[]>>> {
    return await this.repository.getMeasureUnits(filters);
  }
}
