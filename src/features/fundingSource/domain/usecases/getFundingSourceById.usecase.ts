import { type FundingSourceEntity, type FundingSourceSummaryEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type FundingSourceRepository } from '../repositories';

export interface GetFundingSourceByIdUsecase {
  execute: (id: FundingSourceEntity['id']) => Promise<IApiResponse<FundingSourceSummaryEntity>>;
}

export class GetFundingSourceById implements GetFundingSourceByIdUsecase {
  constructor(private readonly repository: FundingSourceRepository) {}

  async execute(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.repository.getFundingSourceById(id);
  }
}
