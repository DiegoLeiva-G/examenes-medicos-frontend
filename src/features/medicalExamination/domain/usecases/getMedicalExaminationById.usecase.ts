import { type MedicalExaminationEntity, type MedicalExaminationGetByIdResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationRepository } from '../repositories';

export interface GetMedicalExaminationByIdUseCase {
  execute: (id: MedicalExaminationEntity['id']) => Promise<IApiResponse<MedicalExaminationGetByIdResponseEntity>>;
}

export class GetMedicalExaminationById implements GetMedicalExaminationByIdUseCase {
  constructor(private readonly repository: MedicalExaminationRepository) {}

  async execute(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationGetByIdResponseEntity>> {
    return await this.repository.getMedicalExaminationById(id);
  }
}
