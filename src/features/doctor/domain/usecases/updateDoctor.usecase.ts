import { type DoctorFormEntity, type DoctorUpdateResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type DoctorRepository } from '../repositories';

export interface UpdateDoctorUseCase {
  execute: (data: Partial<DoctorFormEntity>) => Promise<IApiResponse<DoctorUpdateResponseEntity>>;
}

export class UpdateDoctor implements UpdateDoctorUseCase {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(data: Partial<DoctorFormEntity>): Promise<IApiResponse<DoctorUpdateResponseEntity>> {
    return await this.repository.updateDoctor(data);
  }
}
