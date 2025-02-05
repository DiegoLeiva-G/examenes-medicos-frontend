import { type DoctorEntity, type DoctorGetByIdResponseEntity } from '../entities';
import { type IApiResponse } from '@core/types';
import { type DoctorRepository } from '../repositories';

export interface GetDoctorByIdUseCase {
  execute: (id: DoctorEntity['id']) => Promise<IApiResponse<DoctorGetByIdResponseEntity>>;
}

export class GetDoctorById implements GetDoctorByIdUseCase {
  constructor(private readonly repository: DoctorRepository) {}

  async execute(id: DoctorEntity['id']): Promise<IApiResponse<DoctorGetByIdResponseEntity>> {
    return await this.repository.getDoctorById(id);
  }
}
