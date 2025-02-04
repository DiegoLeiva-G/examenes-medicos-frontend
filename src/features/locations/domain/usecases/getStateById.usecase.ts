import { type IApiResponse } from '@core/types';
import type { LocationRepository } from '../repositories';
import type { StateEntity } from '../entities';

export interface GetStateByIdUseCase {
  execute: (id: StateEntity['id']) => Promise<IApiResponse<StateEntity>>;
}

export class GetStateById implements GetStateByIdUseCase {
  constructor(private readonly repository: LocationRepository) {}

  async execute(id: StateEntity['id']): Promise<IApiResponse<StateEntity>> {
    return await this.repository.getStateById(id);
  }
}
