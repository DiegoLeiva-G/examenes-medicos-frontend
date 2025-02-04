import { type FundingSourceEntity, type FundingSourceSummaryEntity } from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class FundingSourceDatasource {
  abstract getFundingSources(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<FundingSourceSummaryEntity[]>>>;
  abstract getFundingSourceById(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>>;
  abstract createFundingSource(
    data: Omit<FundingSourceSummaryEntity, 'id'>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>>;
  abstract updateFundingSource(
    data: Partial<FundingSourceSummaryEntity>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>>;
  abstract deleteFundingSource(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>>;
}
