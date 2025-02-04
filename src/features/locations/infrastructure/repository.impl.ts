import {
  type LocationDatasource,
  type LocationRepository,
  type StateEntity,
  type StateToSelectEntity,
  type SubStateToSelectEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class LocationRepositoryImpl implements LocationRepository {
  constructor(private readonly datasource: LocationDatasource) {}

  public async getStatesToSelect(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<StateToSelectEntity[]>>> {
    return await this.datasource.getStatesToSelect(filters);
  }

  public async getStateById(id: StateEntity['id']): Promise<IApiResponse<StateEntity>> {
    return await this.datasource.getStateById(id);
  }

  public async getSubStatesByStateIdToSelect(
    filters: BaseListFilters,
    stateId: string,
  ): Promise<IApiResponse<PaginationEntity<SubStateToSelectEntity[]>>> {
    return await this.datasource.getSubStatesByStateIdToSelect(filters, stateId);
  }
}
