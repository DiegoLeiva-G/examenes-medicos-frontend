import { type MeasureUnitFormEntity, type MeasureUnitSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MeasureUnitRepository } from '../repositories';

export interface UpdateMeasureUnitUseCase {
  execute: (data: Partial<MeasureUnitFormEntity>) => Promise<IApiResponse<MeasureUnitSummaryEntity>>;
}

export class UpdateMeasureUnit implements UpdateMeasureUnitUseCase {
  constructor(private readonly repository: MeasureUnitRepository) {}

  async execute(data: Partial<MeasureUnitFormEntity>): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.repository.updateMeasureUnit(data);
  }
}
