import {
  type MedicalPatientCreateResponseEntity,
  type MedicalPatientDatasource,
  type MedicalPatientDeleteResponseEntity,
  type MedicalPatientEntity,
  type MedicalPatientFormEntity,
  type MedicalPatientGetAllResponseEntity,
  type MedicalPatientGetByIdResponseEntity,
  type MedicalPatientRepository,
  type MedicalPatientUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalPatientRepositoryImpl implements MedicalPatientRepository {
  constructor(private readonly datasource: MedicalPatientDatasource) {}

  public async getMedicalPatients(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalPatientGetAllResponseEntity[]>>> {
    return await this.datasource.getMedicalPatients(filters);
  }

  public async getMedicalPatientById(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientGetByIdResponseEntity>> {
    return await this.datasource.getMedicalPatientById(id);
  }

  public async deleteMedicalPatient(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientDeleteResponseEntity>> {
    return await this.datasource.deleteMedicalPatient(id);
  }

  public async createMedicalPatient(data: Omit<MedicalPatientFormEntity, 'id'>): Promise<IApiResponse<MedicalPatientCreateResponseEntity>> {
    return await this.datasource.createMedicalPatient(data);
  }

  public async updateMedicalPatient(data: Partial<MedicalPatientFormEntity>): Promise<IApiResponse<MedicalPatientUpdateResponseEntity>> {
    return await this.datasource.updateMedicalPatient(data);
  }
}
