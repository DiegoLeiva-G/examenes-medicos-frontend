import { type MedicalExaminationEntity, type MedicalExaminationDeleteResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationRepository } from '../repositories';

export interface DeleteMedicalExaminationUseCase {
  execute: (id: MedicalExaminationEntity['id']) => Promise<IApiResponse<MedicalExaminationDeleteResponseEntity>>;
}

export class DeleteMedicalExamination implements DeleteMedicalExaminationUseCase {
  constructor(private readonly repository: MedicalExaminationRepository) {}

  async execute(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationDeleteResponseEntity>> {
    return await this.repository.deleteMedicalExamination(id);
  }
}
