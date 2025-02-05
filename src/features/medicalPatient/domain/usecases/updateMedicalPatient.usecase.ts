import { type MedicalPatientFormEntity, type MedicalPatientUpdateResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalPatientRepository } from '../repositories';

export interface UpdateMedicalPatientUseCase {
  execute: (data: Partial<MedicalPatientFormEntity>) => Promise<IApiResponse<MedicalPatientUpdateResponseEntity>>;
}

export class UpdateMedicalPatient implements UpdateMedicalPatientUseCase {
  constructor(private readonly repository: MedicalPatientRepository) {}

  async execute(data: Partial<MedicalPatientFormEntity>): Promise<IApiResponse<MedicalPatientUpdateResponseEntity>> {
    return await this.repository.updateMedicalPatient(data);
  }
}
