import { type IApiResponse } from '@core/types';
import { type MedicalExaminationTypeRepository } from '../repositories';
import { type MedicalExaminationTypeFormEntity, type MedicalExaminationTypeCreateResponseEntity } from '../entities';

export interface CreateMedicalExaminationTypeUseCase {
  execute: (data: Omit<MedicalExaminationTypeFormEntity, 'id'>) => Promise<IApiResponse<MedicalExaminationTypeCreateResponseEntity>>;
}

export class CreateMedicalExaminationType implements CreateMedicalExaminationTypeUseCase {
  constructor(private readonly repository: MedicalExaminationTypeRepository) {}

  async execute(data: Omit<MedicalExaminationTypeFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationTypeCreateResponseEntity>> {
    return await this.repository.createMedicalExaminationType(data);
  }
}
