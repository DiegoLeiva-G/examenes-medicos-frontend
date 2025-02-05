import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type MedicalExaminationTypeGetAllResponseEntity } from '../entities';
import { type MedicalExaminationTypeRepository } from '../repositories';

export interface GetMedicalExaminationTypesUsecase {
  execute: (filters: BaseListFilters) => Promise<IApiResponse<PaginationEntity<MedicalExaminationTypeGetAllResponseEntity[]>>>;
}

export class GetMedicalExaminationTypes implements GetMedicalExaminationTypesUsecase {
  constructor(private readonly repository: MedicalExaminationTypeRepository) {}

  async execute(filters: BaseListFilters): Promise<IApiResponse<PaginationEntity<MedicalExaminationTypeGetAllResponseEntity[]>>> {
    return await this.repository.getMedicalExaminationTypes(filters);
  }
}
