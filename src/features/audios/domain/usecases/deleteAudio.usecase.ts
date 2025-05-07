import { type AudioEntity, type AudioDeleteResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type AudioRepository } from '../repositories';

export interface DeleteAudioUseCase {
  execute: (id: AudioEntity['id']) => Promise<IApiResponse<AudioDeleteResponseEntity>>;
}

export class DeleteAudio implements DeleteAudioUseCase {
  constructor(private readonly repository: AudioRepository) {}

  async execute(id: AudioEntity['id']): Promise<IApiResponse<AudioDeleteResponseEntity>> {
    return await this.repository.deleteAudio(id);
  }
}
