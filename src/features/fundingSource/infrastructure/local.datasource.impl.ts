import { type FundingSourceDatasource, type FundingSourceEntity, type FundingSourceSummaryEntity } from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class FundingSourceDatasourceImpl implements FundingSourceDatasource {
  public async getFundingSources({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<FundingSourceSummaryEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/funding-sources?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getFundingSourceById(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/funding-sources/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createFundingSource(
    data: Omit<FundingSourceSummaryEntity, 'id'>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlEncodedData.append(key, value.toString());
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/funding-sources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateFundingSource(
    data: Partial<FundingSourceSummaryEntity>,
  ): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    const { id, ...restData } = data;
    const urlEncodedData = new URLSearchParams();

    Object.entries(restData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlEncodedData.append(key, value.toString());
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/funding-sources/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async deleteFundingSource(id: FundingSourceEntity['id']): Promise<IApiResponse<FundingSourceSummaryEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/funding-sources/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }
}
