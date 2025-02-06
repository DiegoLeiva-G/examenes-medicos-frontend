import { MedicalExaminationDatasourceImpl, MedicalExaminationRepositoryImpl } from '../../infrastructure';
import { CreateMedicalExamination, DeleteMedicalExamination, GetMedicalExaminationById, GetMedicalExaminations, UpdateMedicalExamination } from '../../domain';

const medicalExaminationDatasourceImpl = new MedicalExaminationDatasourceImpl();
const medicalExaminationRepositoryImpl = new MedicalExaminationRepositoryImpl(medicalExaminationDatasourceImpl);

export const getMedicalExaminations = new GetMedicalExaminations(medicalExaminationRepositoryImpl);
export const getMedicalExaminationById = new GetMedicalExaminationById(medicalExaminationRepositoryImpl);
export const createMedicalExamination = new CreateMedicalExamination(medicalExaminationRepositoryImpl);
export const updateMedicalExamination = new UpdateMedicalExamination(medicalExaminationRepositoryImpl);
export const deleteMedicalExamination = new DeleteMedicalExamination(medicalExaminationRepositoryImpl);
