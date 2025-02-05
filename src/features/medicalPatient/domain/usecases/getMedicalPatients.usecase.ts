import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type MedicalPatientGetAllResponseEntity } from '../entities';
import { type MedicalPatientRepository } from '../repositories';

export interface GetMedicalPatientsUseCase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<MedicalPatientGetAllResponseEntity[]>>>;
}

export class GetMedicalPatients implements GetMedicalPatientsUseCase {
  constructor(private readonly repository: MedicalPatientRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<MedicalPatientGetAllResponseEntity[]>>> {
    return await this.repository.getMedicalPatients(filters);
  }
}
