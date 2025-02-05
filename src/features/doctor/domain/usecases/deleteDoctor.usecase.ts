import { type DoctorEntity, type DoctorDeleteResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type DoctorRepository } from '../repositories';

export interface DeleteDoctorUseCase {
  execute: (id: DoctorEntity['id']) => Promise<IApiResponse<DoctorDeleteResponseEntity>>;
}

export class DeleteDoctor implements DeleteDoctorUseCase {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(id: DoctorEntity['id']): Promise<IApiResponse<DoctorDeleteResponseEntity>> {
    return await this.repository.deleteDoctor(id);
  }
}
