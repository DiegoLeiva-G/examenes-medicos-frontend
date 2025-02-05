import { type MedicalPatientEntity, type MedicalPatientGetByIdResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type MedicalPatientRepository } from '../repositories';

export interface GetMedicalPatientByIdUseCase {
  execute: (id: MedicalPatientEntity['id']) => Promise<IApiResponse<MedicalPatientGetByIdResponseEntity>>;
}

export class GetMedicalPatientById implements GetMedicalPatientByIdUseCase {
  constructor(private readonly repository: MedicalPatientRepository) {}

  async execute(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientGetByIdResponseEntity>> {
    return await this.repository.getMedicalPatientById(id);
  }
}
