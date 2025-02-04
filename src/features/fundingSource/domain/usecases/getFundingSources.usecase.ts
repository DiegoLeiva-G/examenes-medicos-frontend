import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type FundingSourceSummaryEntity } from '../entities';
import { type FundingSourceRepository } from '../repositories';

export interface GetFundingSourcesUsecase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<FundingSourceSummaryEntity[]>>>;
}

export class GetFundingSources implements GetFundingSourcesUsecase {
  constructor(private readonly repository: FundingSourceRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<FundingSourceSummaryEntity[]>>> {
    return await this.repository.getFundingSources(filters);
  }
}
