import { type FundingSourceEntity, type FundingSourceSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type FundingSourceRepository } from '../repositories';

export interface DeleteFundingSourceUsecase {
  execute: (id: FundingSourceEntity['id']) => Promise<IApiResponse<FundingSourceSummaryEntity>>;
}

export class DeleteFundingSource implements DeleteFundingSourceUsecase {
  constructor(private readonly repository: FundingSourceRepository) {}

  async execute(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.repository.deleteFundingSource(id);
  }
}
