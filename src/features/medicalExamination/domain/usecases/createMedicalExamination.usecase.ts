import { type IApiResponse } from '@core/types';
import { type MedicalExaminationRepository } from '../repositories';
import { type MedicalExaminationFormEntity, type MedicalExaminationCreateResponseEntity } from '../entities';

export interface CreateMedicalExaminationUseCase {
  execute: (data: Omit<MedicalExaminationFormEntity, 'id'>) => Promise<IApiResponse<MedicalExaminationCreateResponseEntity>>;
}

export class CreateMedicalExamination implements CreateMedicalExaminationUseCase {
  constructor(private readonly repository: MedicalExaminationRepository) {}

  async execute(data: Omit<MedicalExaminationFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationCreateResponseEntity>> {
    return await this.repository.createMedicalExamination(data);
  }
}
