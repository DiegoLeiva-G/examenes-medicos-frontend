import { type IApiResponse } from '@core/types';
import { type FundingSourceRepository } from '../repositories';
import { type FundingSourceSummaryEntity } from '../entities';

export interface CreateFundingSourceUsecase {
  execute: (data: Omit<FundingSourceSummaryEntity, 'id'>) => Promise<IApiResponse<FundingSourceSummaryEntity>>;
}

export class CreateFundingSource implements CreateFundingSourceUsecase {
  constructor(private readonly repository: FundingSourceRepository) {}

  async execute(data: Omit<FundingSourceSummaryEntity, 'id'>): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.repository.createFundingSource(data);
  }
}
