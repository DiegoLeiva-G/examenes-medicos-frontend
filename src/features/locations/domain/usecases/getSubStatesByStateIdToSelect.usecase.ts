import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';
import { type StateEntity, type SubStateToSelectEntity } from '../entities';
import { type LocationRepository } from '../repositories';

export interface GetSubStatesByStateIdToSelectUseCase {
  execute: (
    filters: BaseListFilters,
    stateId: StateEntity['id'],
  ) => Promise<IApiResponse<PaginationEntity<SubStateToSelectEntity[]>>>;
}

export class GetSubStatesByStateIdToSelect implements GetSubStatesByStateIdToSelectUseCase {
  constructor(private readonly repository: LocationRepository) {}

  async execute(
    filters: BaseListFilters,
    stateId: StateEntity['id'],
  ): Promise<IApiResponse<PaginationEntity<SubStateToSelectEntity[]>>> {
    return await this.repository.getSubStatesByStateIdToSelect(filters, stateId);
  }
}
