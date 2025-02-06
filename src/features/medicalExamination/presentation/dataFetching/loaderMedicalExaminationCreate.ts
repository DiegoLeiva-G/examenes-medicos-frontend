import { getMedicalPatients } from '../../../medicalPatient';
import { getMedicalExaminationTypes } from '../../../medicalExaminationType';
import { getDoctors } from '../../../doctor';

export const loaderMedicalExaminationCreate = async () => {
  const { data: medicalPatients, error: errorMedicalPatients } = await getMedicalPatients.execute({
    limit: 1000,
    page: 1,
    search: '',
  });

  if (!medicalPatients || errorMedicalPatients) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  const { data: medicalExaminationTypes, error: errorMedicalExaminationTypes } =
    await getMedicalExaminationTypes.execute({
      limit: 1000,
      page: 1,
      search: '',
    });

  if (!medicalExaminationTypes || errorMedicalExaminationTypes) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  const { data: doctors, error: errorDoctors } = await getDoctors.execute({
    limit: 1000,
    page: 1,
    search: '',
  });

  if (!doctors || errorDoctors) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    medicalPatients: medicalPatients.results,
    medicalExaminationTypes: medicalExaminationTypes.results,
    doctors: doctors.results,
  };
};
