import {
  type MedicalExaminationCreateResponseEntity, type MedicalExaminationDeleteResponseEntity,
  type MedicalExaminationEntity, type MedicalExaminationFormEntity,
  type MedicalExaminationGetAllResponseEntity, type MedicalExaminationGetByIdResponseEntity, type MedicalExaminationUpdateResponseEntity,
} from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class MedicalExaminationRepository {
  abstract getMedicalExaminations(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalExaminationGetAllResponseEntity[]>>>;
  abstract getMedicalExaminationById(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationGetByIdResponseEntity>>;
  abstract deleteMedicalExamination(id: MedicalExaminationEntity['id']): Promise<IApiResponse<MedicalExaminationDeleteResponseEntity>>;
  abstract createMedicalExamination(data: Omit<MedicalExaminationFormEntity, 'id'>): Promise<IApiResponse<MedicalExaminationCreateResponseEntity>>;
  abstract updateMedicalExamination(data: Partial<MedicalExaminationFormEntity>): Promise<IApiResponse<MedicalExaminationUpdateResponseEntity>>;

}
