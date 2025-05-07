import { type AudioEntity, type AudioGetByIdResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type AudioRepository } from '../repositories';

export interface GetAudioByIdUseCase {
  execute: (id: AudioEntity['id']) => Promise<IApiResponse<AudioGetByIdResponseEntity>>;
}

export class GetAudioById implements GetAudioByIdUseCase {
  constructor(private readonly repository: AudioRepository) {}

  async execute(id: AudioEntity['id']): Promise<IApiResponse<AudioGetByIdResponseEntity>> {
    return await this.repository.getAudioById(id);
  }
}
