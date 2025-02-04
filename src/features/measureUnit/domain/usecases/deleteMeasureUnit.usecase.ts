import { type MeasureUnitEntity, type MeasureUnitSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MeasureUnitRepository } from '../repositories';

export interface DeleteMeasureUnitUseCase {
  execute: (id: MeasureUnitEntity['id']) => Promise<IApiResponse<MeasureUnitSummaryEntity>>;
}

export class DeleteMeasureUnit implements DeleteMeasureUnitUseCase {
  constructor(private readonly repository: MeasureUnitRepository) {}

  async execute(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.repository.deleteMeasureUnit(id);
  }
}
