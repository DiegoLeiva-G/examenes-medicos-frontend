import {
  type MedicalExaminationCreateResponseEntity,
  type MedicalExaminationDatasource,
  type MedicalExaminationDeleteResponseEntity,
  type MedicalExaminationEntity,
  type MedicalExaminationFormEntity,
  type MedicalExaminationGetAllResponseEntity,
  type MedicalExaminationGetByIdResponseEntity,
  type MedicalExaminationRepository,
  type MedicalExaminationUpdateResponseEntity,
} from '../domain';
import { type BaseListFilters, type IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../_global';

export class MedicalExaminationRepositoryImpl implements MedicalExaminationRepository {
  constructor(private readonly datasource: MedicalExaminationDatasource) {}

  public async getMedicalExaminations(
    filters: BaseListFilters,
    type: string[],
  ): Promise<IApiResponse<PaginationEntity<MedicalExaminationGetAllResponseEntity[]>>> {
    return await this.datasource.getMedicalExaminations(filters, type);
  }

  public async getMedicalExaminationById(
    id: MedicalExaminationEntity['id'],
  ): Promise<IApiResponse<MedicalExaminationGetByIdResponseEntity>> {
    return await this.datasource.getMedicalExaminationById(id);
  }

  public async deleteMedicalExamination(
    id: MedicalExaminationEntity['id'],
  ): Promise<IApiResponse<MedicalExaminationDeleteResponseEntity>> {
    return await this.datasource.deleteMedicalExamination(id);
  }

  public async createMedicalExamination(
    data: Omit<MedicalExaminationFormEntity, 'id'>,
  ): Promise<IApiResponse<MedicalExaminationCreateResponseEntity>> {
    return await this.datasource.createMedicalExamination(data);
  }

  public async updateMedicalExamination(
    data: Partial<MedicalExaminationFormEntity>,
  ): Promise<IApiResponse<MedicalExaminationUpdateResponseEntity>> {
    return await this.datasource.updateMedicalExamination(data);
  }
}
