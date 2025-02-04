import { type MeasureUnitEntity, type MeasureUnitSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MeasureUnitRepository } from '../repositories';

export interface GetMeasureUnitByIdUseCase {
  execute: (id: MeasureUnitEntity['id']) => Promise<IApiResponse<MeasureUnitSummaryEntity>>;
}

export class GetMeasureUnitById implements GetMeasureUnitByIdUseCase {
  constructor(private readonly repository: MeasureUnitRepository) {}

  async execute(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.repository.getMeasureUnitById(id);
  }
}
