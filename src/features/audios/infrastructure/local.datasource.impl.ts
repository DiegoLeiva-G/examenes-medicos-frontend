import {
  type AudioCreateResponseEntity,
  type AudioDatasource,
  type AudioDeleteResponseEntity,
  type AudioEntity,
  type AudioFormEntity,
  type AudioGetAllResponseEntity,
  type AudioGetByIdResponseEntity,
  type AudioUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class AudioDatasourceImpl implements AudioDatasource {
  public async getAudios({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<AudioGetAllResponseEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/audios?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        // credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getAudioById(id: AudioEntity['id']): Promise<IApiResponse<AudioGetByIdResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/audios/' + id, {
      method: 'GET',
      // credentials: 'include',
    }).then(response => response.json());
  }

  public async deleteAudio(id: AudioEntity['id']): Promise<IApiResponse<AudioDeleteResponseEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/audios/' + id, {
      method: 'DELETE',
      // credentials: 'include',
    }).then(response => response.json());
  }

  public async createAudio(data: Omit<AudioFormEntity, 'id'>): Promise<IApiResponse<AudioCreateResponseEntity>> {
    const urlEncodedData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && typeof value !== "object") {
        urlEncodedData.append(key, value.toString());
      }

      if(typeof value === "object") {
        urlEncodedData.append(key, JSON.stringify(value));
      }
    });

    return fetch(import.meta.env.VITE_API_BASE_URL + '/audios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }

  public async updateAudio(data: Partial<AudioFormEntity>): Promise<IApiResponse<AudioUpdateResponseEntity>> {
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

    return fetch(import.meta.env.VITE_API_BASE_URL + '/audios/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // credentials: 'include',
      body: urlEncodedData.toString(),
    }).then(response => response.json());
  }
}
