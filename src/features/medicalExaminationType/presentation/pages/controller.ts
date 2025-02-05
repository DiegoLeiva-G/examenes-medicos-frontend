import { MedicalExaminationTypeDatasourceImpl, MedicalExaminationTypeRepositoryImpl } from '../../infrastructure';
import {
  CreateMedicalExaminationType,
  DeleteMedicalExaminationType,
  GetMedicalExaminationTypeById,
  GetMedicalExaminationTypes,
  UpdateMedicalExaminationType,
} from '../../domain';

const medicalExaminationTypeDatasourceImpl = new MedicalExaminationTypeDatasourceImpl();
const medicalExaminationTypeRepositoryImpl = new MedicalExaminationTypeRepositoryImpl(
  medicalExaminationTypeDatasourceImpl,
);

export const getMedicalExaminationTypes = new GetMedicalExaminationTypes(medicalExaminationTypeRepositoryImpl);
export const getMedicalExaminationTypeById = new GetMedicalExaminationTypeById(medicalExaminationTypeRepositoryImpl);
export const createMedicalExaminationType = new CreateMedicalExaminationType(medicalExaminationTypeRepositoryImpl);
export const updateMedicalExaminationType = new UpdateMedicalExaminationType(medicalExaminationTypeRepositoryImpl);
export const deleteMedicalExaminationType = new DeleteMedicalExaminationType(medicalExaminationTypeRepositoryImpl);
