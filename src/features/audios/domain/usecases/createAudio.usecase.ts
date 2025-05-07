import { type IApiResponse } from '@core/types';
import { type AudioRepository } from '../repositories';
import { type AudioFormEntity, type AudioCreateResponseEntity } from '../entities';

export interface CreateAudioUseCase {
  execute: (data: Omit<AudioFormEntity, 'id'>) => Promise<IApiResponse<AudioCreateResponseEntity>>;
}

export class CreateAudio implements CreateAudioUseCase {
  constructor(private readonly repository: AudioRepository) {}

  async execute(data: Omit<AudioFormEntity, 'id'>): Promise<IApiResponse<AudioCreateResponseEntity>> {
    return await this.repository.createAudio(data);
  }
}
