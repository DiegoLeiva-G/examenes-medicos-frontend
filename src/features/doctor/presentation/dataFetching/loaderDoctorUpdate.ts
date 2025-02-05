import { type LoaderFunctionArgs } from 'react-router-dom';
import { getDoctorById } from '../pages';

export const loaderDoctorUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { doctorId = '' } = params;

  const { data: doctor, error: errorDoctor } = await getDoctorById.execute(doctorId);

  if (!doctor || errorDoctor) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    doctor,
    doctorId,
  };
};
