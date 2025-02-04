import {
  type FundingSourceDatasource,
  type FundingSourceEntity,
  type FundingSourceRepository,
  type FundingSourceSummaryEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class FundingSourceRepositoryImpl implements FundingSourceRepository {
  constructor(private readonly datasource: FundingSourceDatasource) {}

  public async getFundingSources(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<FundingSourceSummaryEntity[]>>> {
    return await this.datasource.getFundingSources(filters);
  }

  public async getFundingSourceById(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.datasource.getFundingSourceById(id);
  }

  public async createFundingSource(
    data: Omit<FundingSourceSummaryEntity, 'id'>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.datasource.createFundingSource(data);
  }

  public async updateFundingSource(
    data: Partial<FundingSourceSummaryEntity>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.datasource.updateFundingSource(data);
  }

  public async deleteFundingSource(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return await this.datasource.deleteFundingSource(id);
  }
}
