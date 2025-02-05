import {
  type MedicalExaminationTypeCreateResponseEntity,
  type MedicalExaminationTypeDatasource,
  type MedicalExaminationTypeDeleteResponseEntity,
  type MedicalExaminationTypeEntity,
  type MedicalExaminationTypeFormEntity,
  type MedicalExaminationTypeGetAllResponseEntity,
  type MedicalExaminationTypeGetByIdResponseEntity,
  type MedicalExaminationTypeRepository,
  type MedicalExaminationTypeUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalExaminationTypeRepositoryImpl implements MedicalExaminationTypeRepository {
  constructor(private readonly datasource: MedicalExaminationTypeDatasource) {}

  public async getMedicalExaminationTypes(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalExaminationTypeGetAllResponseEntity[]>>> {
    return await this.datasource.getMedicalExaminationTypes(filters);
  }

  public async getMedicalExaminationTypeById(
    id: MedicalExaminationTypeEntity['id'],
  ): Promise<IApiResponse<MedicalExaminationTypeGetByIdResponseEntity>> {
    return await this.datasource.getMedicalExaminationTypeById(id);
  }

  public async deleteMedicalExaminationType(
    id: MedicalExaminationTypeEntity['id'],
  ): Promise<IApiResponse<MedicalExaminationTypeDeleteResponseEntity>> {
    return await this.datasource.deleteMedicalExaminationType(id);
  }

  public async createMedicalExaminationType(
    data: Omit<MedicalExaminationTypeFormEntity, 'id'>,
  ): Promise<IApiResponse<MedicalExaminationTypeCreateResponseEntity>> {
    return await this.datasource.createMedicalExaminationType(data);
  }

  public async updateMedicalExaminationType(
    data: Partial<MedicalExaminationTypeFormEntity>,
  ): Promise<IApiResponse<MedicalExaminationTypeUpdateResponseEntity>> {
    return await this.datasource.updateMedicalExaminationType(data);
  }
}
