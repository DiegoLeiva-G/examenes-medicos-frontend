import { type FundingSourceSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type FundingSourceRepository } from '../repositories';

export interface UpdateFundingSourceUsecase {
  execute: (data: Partial<FundingSourceSummaryEntity>) => Promise<IApiResponse<FundingSourceSummaryEntity>>;
}

export class UpdateFundingSource implements UpdateFundingSourceUsecase {
  constructor(private readonly repository: FundingSourceRepository) {}

  async execute(data: Partial<FundingSourceSummaryEntity>): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.repository.updateFundingSource(data);
  }
}
