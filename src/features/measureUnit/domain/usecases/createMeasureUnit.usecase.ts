import { type IApiResponse } from '@core/types';
import { type MeasureUnitRepository } from '../repositories';
import { type MeasureUnitFormEntity, type MeasureUnitSummaryEntity } from '../entities';

export interface CreateMeasureUnitUseCase {
  execute: (data: Omit<MeasureUnitFormEntity, 'id'>) => Promise<IApiResponse<MeasureUnitSummaryEntity>>;
}

export class CreateMeasureUnit implements CreateMeasureUnitUseCase {
  constructor(private readonly repository: MeasureUnitRepository) {}

  async execute(data: Omit<MeasureUnitFormEntity, 'id'>): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return await this.repository.createMeasureUnit(data);
  }
}
