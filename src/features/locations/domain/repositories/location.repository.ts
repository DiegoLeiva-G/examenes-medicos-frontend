import { type PaginationEntity } from '../../../_global';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type StateEntity, type StateToSelectEntity, type SubStateToSelectEntity } from '../entities';

export abstract class LocationRepository {
  abstract getStatesToSelect(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<StateToSelectEntity[]>>>;
  abstract getStateById(id: StateEntity['id']): Promise<IApiResponse<StateEntity>>;
  abstract getSubStatesByStateIdToSelect(
    filters: BaseListFilters,
    stateId: StateEntity['id'],
  ): Promise<IApiResponse<PaginationEntity<SubStateToSelectEntity[]>>>;
}
