import { type MedicalExaminationTypeEntity, type MedicalExaminationTypeGetByIdResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalExaminationTypeRepository } from '../repositories';

export interface GetMedicalExaminationTypeByIdUseCase {
  execute: (id: MedicalExaminationTypeEntity['id']) => Promise<IApiResponse<MedicalExaminationTypeGetByIdResponseEntity>>;
}

export class GetMedicalExaminationTypeById implements GetMedicalExaminationTypeByIdUseCase {
  constructor(private readonly repository: MedicalExaminationTypeRepository) {}

  async execute(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeGetByIdResponseEntity>> {
    return await this.repository.getMedicalExaminationTypeById(id);
  }
}
