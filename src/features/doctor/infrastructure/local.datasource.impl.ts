import {
  type DoctorCreateResponseEntity,
  type DoctorDatasource,
  type DoctorDeleteResponseEntity,
  type DoctorEntity,
  type DoctorFormEntity,
  type DoctorGetAllResponseEntity,
  type DoctorGetByIdResponseEntity,
  type DoctorUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class DoctorDatasourceImpl implements DoctorDatasource {
  public async getDoctors({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<DoctorGetAllResponseEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/doctors?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getDoctorById(id: DoctorEntity['id']): Promise<IApiResponse<DoctorGetByIdResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/doctors/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async deleteDoctor(id: DoctorEntity['id']): Promise<IApiResponse<DoctorDeleteResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/doctors/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createDoctor(data: Omit<DoctorFormEntity, 'id'>): Promise<IApiResponse<DoctorCreateResponseEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateDoctor(data: Partial<DoctorFormEntity>): Promise<IApiResponse<DoctorUpdateResponseEntity>> {
    const { id, ...restData } = data;
    console.log(id)
    const urlEncodedData = new URLSearchParams();

    Object.entries(restData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/doctors/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }
}
