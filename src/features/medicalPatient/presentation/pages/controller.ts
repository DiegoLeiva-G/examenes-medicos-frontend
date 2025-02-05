import { MedicalPatientDatasourceImpl, MedicalPatientRepositoryImpl } from '../../infrastructure';
import { CreateMedicalPatient, DeleteMedicalPatient, GetMedicalPatientById, GetMedicalPatients, UpdateMedicalPatient } from '../../domain';

const medicalPatientDatasourceImpl = new MedicalPatientDatasourceImpl();
const medicalPatientRepositoryImpl = new MedicalPatientRepositoryImpl(medicalPatientDatasourceImpl);

export const getMedicalPatients = new GetMedicalPatients(medicalPatientRepositoryImpl);
export const getMedicalPatientById = new GetMedicalPatientById(medicalPatientRepositoryImpl);
export const createMedicalPatient = new CreateMedicalPatient(medicalPatientRepositoryImpl);
export const updateMedicalPatient = new UpdateMedicalPatient(medicalPatientRepositoryImpl);
export const deleteMedicalPatient = new DeleteMedicalPatient(medicalPatientRepositoryImpl);
