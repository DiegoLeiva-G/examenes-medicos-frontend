import { type BaseListFilters, type IApiResponse } from '@core/types';
import type { PaginationEntity } from '../../../_global';
import { type MedicalExaminationGetAllResponseEntity } from '../entities';
import { type MedicalExaminationRepository } from '../repositories';

export interface GetMedicalExaminationsUseCase {
  execute: (
    filters: BaseListFilters,
  ) => Promise<IApiResponse<PaginationEntity<MedicalExaminationGetAllResponseEntity[]>>>;
}

export class GetMedicalExaminations implements GetMedicalExaminationsUseCase {
  constructor(private readonly repository: MedicalExaminationRepository) {}

  async execute(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalExaminationGetAllResponseEntity[]>>> {
    return await this.repository.getMedicalExaminations(filters);
  }
}
