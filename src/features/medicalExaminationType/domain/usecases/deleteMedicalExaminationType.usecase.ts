import { type MedicalExaminationTypeEntity, type MedicalExaminationTypeDeleteResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationTypeRepository } from '../repositories';

export interface DeleteMedicalExaminationTypeUseCase {
  execute: (id: MedicalExaminationTypeEntity['id']) => Promise<IApiResponse<MedicalExaminationTypeDeleteResponseEntity>>;
}

export class DeleteMedicalExaminationType implements DeleteMedicalExaminationTypeUseCase {
  constructor(private readonly repository: MedicalExaminationTypeRepository) {}

  async execute(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeDeleteResponseEntity>> {
    return await this.repository.deleteMedicalExaminationType(id);
  }
}
