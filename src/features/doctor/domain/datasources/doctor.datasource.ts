import {
  type DoctorCreateResponseEntity, type DoctorDeleteResponseEntity,
  type DoctorEntity, type DoctorFormEntity,
  type DoctorGetAllResponseEntity, type DoctorGetByIdResponseEntity, type DoctorUpdateResponseEntity,
} from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class DoctorDatasource {
  abstract getDoctors(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<DoctorGetAllResponseEntity[]>>>;
  abstract getDoctorById(id: DoctorEntity['id']): Promise<IApiResponse<DoctorGetByIdResponseEntity>>;
  abstract deleteDoctor(id: DoctorEntity['id']): Promise<IApiResponse<DoctorDeleteResponseEntity>>;
  abstract createDoctor(data: Omit<DoctorFormEntity, 'id'>): Promise<IApiResponse<DoctorCreateResponseEntity>>;
  abstract updateDoctor(data: Partial<DoctorFormEntity>): Promise<IApiResponse<DoctorUpdateResponseEntity>>;

}
