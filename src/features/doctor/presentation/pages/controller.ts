import { DoctorDatasourceImpl, DoctorRepositoryImpl } from '../../infrastructure';
import { CreateDoctor, DeleteDoctor, GetDoctorById, GetDoctors, UpdateDoctor } from '../../domain';

const doctorDatasourceImpl = new DoctorDatasourceImpl();
const doctorRepositoryImpl = new DoctorRepositoryImpl(doctorDatasourceImpl);

export const getDoctors = new GetDoctors(doctorRepositoryImpl);
export const getDoctorById = new GetDoctorById(doctorRepositoryImpl);
export const createDoctor = new CreateDoctor(doctorRepositoryImpl);
export const updateDoctor = new UpdateDoctor(doctorRepositoryImpl);
export const deleteDoctor = new DeleteDoctor(doctorRepositoryImpl);
