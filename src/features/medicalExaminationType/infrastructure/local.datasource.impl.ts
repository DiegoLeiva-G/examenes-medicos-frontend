import {
  type MedicalExaminationTypeCreateResponseEntity,
  type MedicalExaminationTypeDatasource,
  type MedicalExaminationTypeDeleteResponseEntity,
  type MedicalExaminationTypeEntity,
  type MedicalExaminationTypeFormEntity,
  type MedicalExaminationTypeGetAllResponseEntity,
  type MedicalExaminationTypeGetByIdResponseEntity,
  type MedicalExaminationTypeUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalExaminationTypeDatasourceImpl implements MedicalExaminationTypeDatasource {
  public async getMedicalExaminationTypes({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<MedicalExaminationTypeGetAllResponseEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/medical-examination-types?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getMedicalExaminationTypeById(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeGetByIdResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examination-types/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async deleteMedicalExaminationType(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeDeleteResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examination-types/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createMedicalExaminationType(data: Omit<MedicalExaminationTypeFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationTypeCreateResponseEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examination-types', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateMedicalExaminationType(data: Partial<MedicalExaminationTypeFormEntity>): Promise<IApiResponse<MedicalExaminationTypeUpdateResponseEntity>> {
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

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examination-types/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }
}
