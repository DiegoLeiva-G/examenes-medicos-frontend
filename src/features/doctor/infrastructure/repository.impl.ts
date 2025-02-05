import {
  type DoctorCreateResponseEntity,
  type DoctorDatasource,
  type DoctorDeleteResponseEntity,
  type DoctorEntity,
  type DoctorFormEntity,
  type DoctorGetAllResponseEntity,
  type DoctorGetByIdResponseEntity,
  type DoctorRepository,
  type DoctorUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class DoctorRepositoryImpl implements DoctorRepository {
  constructor(private readonly datasource: DoctorDatasource) {}

  public async getDoctors(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<DoctorGetAllResponseEntity[]>>> {
    return await this.datasource.getDoctors(filters);
  }

  public async getDoctorById(id: DoctorEntity['id']): Promise<IApiResponse<DoctorGetByIdResponseEntity>> {
    return await this.datasource.getDoctorById(id);
  }

  public async deleteDoctor(id: DoctorEntity['id']): Promise<IApiResponse<DoctorDeleteResponseEntity>> {
    return await this.datasource.deleteDoctor(id);
  }

  public async createDoctor(data: Omit<DoctorFormEntity, 'id'>): Promise<IApiResponse<DoctorCreateResponseEntity>> {
    return await this.datasource.createDoctor(data);
  }

  public async updateDoctor(data: Partial<DoctorFormEntity>): Promise<IApiResponse<DoctorUpdateResponseEntity>> {
    return await this.datasource.updateDoctor(data);
  }
}
