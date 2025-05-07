import { type AudioFormEntity, type AudioUpdateResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type AudioRepository } from '../repositories';

export interface UpdateAudioUseCase {
  execute: (data: Partial<AudioFormEntity>) => Promise<IApiResponse<AudioUpdateResponseEntity>>;
}

export class UpdateAudio implements UpdateAudioUseCase {
  constructor(private readonly repository: AudioRepository) {}

  async execute(data: Partial<AudioFormEntity>): Promise<IApiResponse<AudioUpdateResponseEntity>> {
    return await this.repository.updateAudio(data);
  }
}
