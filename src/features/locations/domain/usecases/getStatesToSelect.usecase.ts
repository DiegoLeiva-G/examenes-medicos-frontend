import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';
import { type StateToSelectEntity } from '../entities';
import { type LocationRepository } from '../repositories';

export interface GetStatesToSelectUseCase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<StateToSelectEntity[]>>>;
}

export class GetStatesToSelect implements GetStatesToSelectUseCase {
  constructor(private readonly repository: LocationRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<StateToSelectEntity[]>>> {
    return await this.repository.getStatesToSelect(filters);
  }
}
