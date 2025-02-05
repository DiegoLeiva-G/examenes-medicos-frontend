import {
  type MedicalExaminationTypeCreateResponseEntity, type MedicalExaminationTypeDeleteResponseEntity,
  type MedicalExaminationTypeEntity, type MedicalExaminationTypeFormEntity,
  type MedicalExaminationTypeGetAllResponseEntity, type MedicalExaminationTypeGetByIdResponseEntity, type MedicalExaminationTypeUpdateResponseEntity,
} from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class MedicalExaminationTypeDatasource {
  abstract getMedicalExaminationTypes(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalExaminationTypeGetAllResponseEntity[]>>>;
  abstract getMedicalExaminationTypeById(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeGetByIdResponseEntity>>;
  abstract deleteMedicalExaminationType(id: MedicalExaminationTypeEntity['id']): Promise<IApiResponse<MedicalExaminationTypeDeleteResponseEntity>>;
  abstract createMedicalExaminationType(data: Omit<MedicalExaminationTypeFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationTypeCreateResponseEntity>>;
  abstract updateMedicalExaminationType(data: Partial<MedicalExaminationTypeFormEntity>): Promise<IApiResponse<MedicalExaminationTypeUpdateResponseEntity>>;

}
