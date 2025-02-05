import {
  type MedicalPatientCreateResponseEntity, type MedicalPatientDeleteResponseEntity,
  type MedicalPatientEntity, type MedicalPatientFormEntity,
  type MedicalPatientGetAllResponseEntity, type MedicalPatientGetByIdResponseEntity, type MedicalPatientUpdateResponseEntity,
} from '../entities';
import type { BaseListFilters, IApiResponse } from '@core/types';
import { type PaginationEntity } from '../../../_global';

export abstract class MedicalPatientRepository {
  abstract getMedicalPatients(
    filters: BaseListFilters,
  ): Promise<IApiResponse<PaginationEntity<MedicalPatientGetAllResponseEntity[]>>>;
  abstract getMedicalPatientById(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientGetByIdResponseEntity>>;
  abstract deleteMedicalPatient(id: MedicalPatientEntity['id']): Promise<IApiResponse<MedicalPatientDeleteResponseEntity>>;
  abstract createMedicalPatient(data: Omit<MedicalPatientFormEntity, 'id'>): Promise<IApiResponse<MedicalPatientCreateResponseEntity>>;
  abstract updateMedicalPatient(data: Partial<MedicalPatientFormEntity>): Promise<IApiResponse<MedicalPatientUpdateResponseEntity>>;

}
