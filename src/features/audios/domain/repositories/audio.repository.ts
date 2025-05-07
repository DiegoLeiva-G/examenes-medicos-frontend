import {
  type AudioCreateResponseEntity,
  type AudioDeleteResponseEntity,
  type AudioEntity,
  type AudioFormEntity,
  type AudioGetAllResponseEntity,
  type AudioGetByIdResponseEntity,
  type AudioUpdateResponseEntity,
} from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class AudioRepository {
  abstract getAudios(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<AudioGetAllResponseEntity[]>>>;
  abstract getAudioById(id: AudioEntity['id']): Promise<IApiResponse<AudioGetByIdResponseEntity>>;
  abstract deleteAudio(id: AudioEntity['id']): Promise<IApiResponse<AudioDeleteResponseEntity>>;
  abstract createAudio(data: Omit<AudioFormEntity, 'id'>): Promise<IApiResponse<AudioCreateResponseEntity>>;
  abstract updateAudio(data: Partial<AudioFormEntity>): Promise<IApiResponse<AudioUpdateResponseEntity>>;
}