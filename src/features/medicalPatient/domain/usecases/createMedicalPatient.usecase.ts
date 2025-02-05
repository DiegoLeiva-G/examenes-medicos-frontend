import { type IApiResponse } from '@core/types';
import { type MedicalPatientRepository } from '../repositories';
import { type MedicalPatientFormEntity, type MedicalPatientCreateResponseEntity } from '../entities';

export interface CreateMedicalPatientUseCase {
  execute: (data: Omit<MedicalPatientFormEntity, 'id'>) => Promise<IApiResponse<MedicalPatientCreateResponseEntity>>;
}

export class CreateMedicalPatient implements CreateMedicalPatientUseCase {
  constructor(private readonly repository: MedicalPatientRepository) {}

  async execute(data: Omit<MedicalPatientFormEntity, 'id'>): Promise<IApiResponse<MedicalPatientCreateResponseEntity>> {
    return await this.repository.createMedicalPatient(data);
  }
}
