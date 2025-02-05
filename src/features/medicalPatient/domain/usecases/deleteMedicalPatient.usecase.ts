import { type MedicalPatientEntity, type MedicalPatientDeleteResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalPatientRepository } from '../repositories';

export interface DeleteMedicalPatientUseCase {
  execute: (id: MedicalPatientEntity['id']) => Promise<IApiResponse<MedicalPatientDeleteResponseEntity>>;
}

export class DeleteMedicalPatient implements DeleteMedicalPatientUseCase {
  constructor(private readonly repository: MedicalPatientRepository) {}

  async execute(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientDeleteResponseEntity>> {
    return await this.repository.deleteMedicalPatient(id);
  }
}
