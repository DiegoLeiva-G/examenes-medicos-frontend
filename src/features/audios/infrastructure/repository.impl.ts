import {
  type AudioCreateResponseEntity,
  type AudioDatasource,
  type AudioDeleteResponseEntity,
  type AudioEntity,
  type AudioFormEntity,
  type AudioGetAllResponseEntity,
  type AudioGetByIdResponseEntity,
  type AudioRepository,
  type AudioUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class AudioRepositoryImpl implements AudioRepository {
  constructor(private readonly datasource: AudioDatasource) {}

  public async getAudios(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<AudioGetAllResponseEntity[]>>> {
    return await this.datasource.getAudios(filters);
  }

  public async getAudioById(id: AudioEntity['id']): Promise<IApiResponse<AudioGetByIdResponseEntity>> {
    return await this.datasource.getAudioById(id);
  }

  public async deleteAudio(id: AudioEntity['id']): Promise<IApiResponse<AudioDeleteResponseEntity>> {
    return await this.datasource.deleteAudio(id);
  }

  public async createAudio(data: Omit<AudioFormEntity, 'id'>): Promise<IApiResponse<AudioCreateResponseEntity>> {
    return await this.datasource.createAudio(data);
  }

  public async updateAudio(data: Partial<AudioFormEntity>): Promise<IApiResponse<AudioUpdateResponseEntity>> {
    return await this.datasource.updateAudio(data);
  }
}
