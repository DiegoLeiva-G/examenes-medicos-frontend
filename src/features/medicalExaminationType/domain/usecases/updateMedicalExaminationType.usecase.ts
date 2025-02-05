import { type MedicalExaminationTypeFormEntity, type MedicalExaminationTypeUpdateResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationTypeRepository } from '../repositories';

export interface UpdateMedicalExaminationTypeUseCase {
  execute: (data: Partial<MedicalExaminationTypeFormEntity>) => Promise<IApiResponse<MedicalExaminationTypeUpdateResponseEntity>>;
}

export class UpdateMedicalExaminationType implements UpdateMedicalExaminationTypeUseCase {
  constructor(private readonly repository: MedicalExaminationTypeRepository) {}

  async execute(data: Partial<MedicalExaminationTypeFormEntity>): Promise<IApiResponse<MedicalExaminationTypeUpdateResponseEntity>> {
    return await this.repository.updateMedicalExaminationType(data);
  }
}
