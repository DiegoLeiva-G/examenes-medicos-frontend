import {
  type LocationDatasource,
  type StateEntity,
  type StateToSelectEntity,
  type SubStateToSelectEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class LocationDatasourceImpl implements LocationDatasource {
  public async getStatesToSelect({
    search,
    page,
    limit,
  }: BaseListFilters): Promise<IApiResponse<PaginationEntity<StateToSelectEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL + '/locations/states?page=' + page + '&limit=' + limit + '&search=' + search,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }

  public async getStateById(id: StateEntity['id']): Promise<IApiResponse<StateEntity>> {
    return fetch(import.meta.env.VITE_API_BASE_URL + '/locations/states/' + id, {
      method: 'GET',
      credentials: 'include',
    }).then(response => response.json());
  }

  public async getSubStatesByStateIdToSelect(
    { search, page, limit }: BaseListFilters,
    stateId: StateEntity['id'],
  ): Promise<IApiResponse<PaginationEntity<SubStateToSelectEntity[]>>> {
    return fetch(
      import.meta.env.VITE_API_BASE_URL +
        '/locations/sub-states?page=' +
        page +
        '&limit=' +
        limit +
        '&search=' +
        search +
        '&stateId=' +
        stateId,
      {
        method: 'GET',
        credentials: 'include',
      },
    ).then(response => response.json());
  }
}
