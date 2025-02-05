import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type DoctorGetAllResponseEntity } from '../entities';
import { type DoctorRepository } from '../repositories';

export interface GetDoctorsUseCase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<DoctorGetAllResponseEntity[]>>>;
}

export class GetDoctors implements GetDoctorsUseCase {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<DoctorGetAllResponseEntity[]>>> {
    return await this.repository.getDoctors(filters);
  }
}
