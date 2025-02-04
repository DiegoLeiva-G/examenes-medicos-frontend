import {
  type MeasureUnitDatasource,
  type MeasureUnitEntity,
  type MeasureUnitFormEntity,
  type MeasureUnitSummaryEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MeasureUnitDatasourceImpl implements MeasureUnitDatasource {
  public async getMeasureUnits({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<MeasureUnitSummaryEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/measure-units?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getMeasureUnitById(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/measure-units/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createMeasureUnit(
    data: Omit<MeasureUnitFormEntity, 'id'>,
  ): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlEncodedData.append(key, value.toString());
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/measure-units', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateMeasureUnit(
    data: Partial<MeasureUnitFormEntity>,
  ): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    const { id, ...restData } = data;
    const urlEncodedData = new URLSearchParams();

    Object.entries(restData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlEncodedData.append(key, value.toString());
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/measure-units/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async deleteMeasureUnit(id: MeasureUnitEntity['id']): Promise<IApiResponse<MeasureUnitSummaryEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/measure-units/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }
}
