import {
  type MedicalPatientCreateResponseEntity,
  type MedicalPatientDatasource,
  type MedicalPatientDeleteResponseEntity,
  type MedicalPatientEntity,
  type MedicalPatientFormEntity,
  type MedicalPatientGetAllResponseEntity,
  type MedicalPatientGetByIdResponseEntity,
  type MedicalPatientUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalPatientDatasourceImpl implements MedicalPatientDatasource {
  public async getMedicalPatients({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<MedicalPatientGetAllResponseEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/medical-patients?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getMedicalPatientById(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientGetByIdResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-patients/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async deleteMedicalPatient(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientDeleteResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-patients/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createMedicalPatient(data: Omit<MedicalPatientFormEntity, 'id'>): Promise<IApiResponse<MedicalPatientCreateResponseEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateMedicalPatient(data: Partial<MedicalPatientFormEntity>): Promise<IApiResponse<MedicalPatientUpdateResponseEntity>> {
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

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-patients/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }
}
