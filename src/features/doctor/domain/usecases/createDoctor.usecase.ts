import { type IApiResponse } from '@core/types';
import { type DoctorRepository } from '../repositories';
import { type DoctorFormEntity, type DoctorCreateResponseEntity } from '../entities';

export interface CreateDoctorUseCase {
  execute: (data: Omit<DoctorFormEntity, 'id'>) => Promise<IApiResponse<DoctorCreateResponseEntity>>;
}

export class CreateDoctor implements CreateDoctorUseCase {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(data: Omit<DoctorFormEntity, 'id'>): Promise<IApiResponse<DoctorCreateResponseEntity>> {
    return await this.repository.createDoctor(data);
  }
}
