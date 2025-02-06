import { type MedicalExaminationFormEntity, type MedicalExaminationUpdateResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationRepository } from '../repositories';

export interface UpdateMedicalExaminationUseCase {
  execute: (data: Partial<MedicalExaminationFormEntity>) => Promise<IApiResponse<MedicalExaminationUpdateResponseEntity>>;
}

export class UpdateMedicalExamination implements UpdateMedicalExaminationUseCase {
  constructor(private readonly repository: MedicalExaminationRepository) {}

  async execute(data: Partial<MedicalExaminationFormEntity>): Promise<IApiResponse<MedicalExaminationUpdateResponseEntity>> {
    return await this.repository.updateMedicalExamination(data);
  }
}
