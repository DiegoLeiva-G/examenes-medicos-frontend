import {
  type MedicalExaminationCreateResponseEntity,
  type MedicalExaminationDatasource,
  type MedicalExaminationDeleteResponseEntity,
  type MedicalExaminationEntity,
  type MedicalExaminationFormEntity,
  type MedicalExaminationGetAllResponseEntity,
  type MedicalExaminationGetByIdResponseEntity,
  type MedicalExaminationUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalExaminationDatasourceImpl implements MedicalExaminationDatasource {
  public async getMedicalExaminations({
    page,
    limit,
  }: BaseListFilters, type: string[],): Promise<IApiResponse<PaginationEntity<MedicalExaminationGetAllResponseEntity[]>>> {
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append('type2', JSON.stringify(type));
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/medical-examinations/listar?page=' + page + '&limit=' + limit,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: urlEncodedData.toString(),
      },
    ).then(response => response.json());
  }

  public async getMedicalExaminationById(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationGetByIdResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examinations/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async deleteMedicalExamination(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationDeleteResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examinations/' + id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async createMedicalExamination(data: Omit<MedicalExaminationFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationCreateResponseEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examinations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateMedicalExamination(data: Partial<MedicalExaminationFormEntity>): Promise<IApiResponse<MedicalExaminationUpdateResponseEntity>> {
    const { id, ...restData } = data;
    const urlEncodedData = new URLSearchParams();

    Object.entries(restData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/medical-examinations/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }
}
