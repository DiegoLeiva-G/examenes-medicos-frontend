import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type AudioGetAllResponseEntity } from '../entities';
import { type AudioRepository } from '../repositories';

export interface GetAudiosUseCase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<AudioGetAllResponseEntity[]>>>;
}

export class GetAudios implements GetAudiosUseCase {
  constructor(private readonly repository: AudioRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<AudioGetAllResponseEntity[]>>> {
    return await this.repository.getAudios(filters);
  }
}
