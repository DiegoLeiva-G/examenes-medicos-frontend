import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalPatientFormValues, MedicalPatientForm } from '../components';
import { type loaderMedicalPatientUpdate } from '../dataFetching';
import { updateMedicalPatient } from './controller.ts';

export const UpdateMedicalPatientPage: FC = () => {
  const { medicalPatientId, medicalPatient } = useLoaderData<typeof loaderMedicalPatientUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalPatientFormValues) => {
      setLoading(true);

      updateMedicalPatient.execute({ id: medicalPatientId, ...formValues }).then(response => {
        setLoading(false);
        const titleNotification = 'Edición del paciente médico';

        if (response.error?.message) {
          setNotification({
            title: titleNotification,
            type: 'error',
            message: response.error.message,
          });

          return;
        }

        if (response.data?.id) {
          setNotification({
            title: titleNotification,
            type: 'success',
            message: 'Se ha editado correctamente el paciente médico!',
          });

          navigate('/pacientes-medicos');

          return;
        }
      });
    },
    [navigate, setNotification, medicalPatientId],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Pacientes médicos',
        href: '/pacientes-medicos',
      },
      {
        title: 'Editar',
        href: `/pacientes-medicos/${medicalPatientId}/editar`,
      },
    ],
    [medicalPatientId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar paciente médico - Examenes médicos`} />
      <BreadCrumb title={`Editar paciente médico`} navItems={navItems} />
      <Container>
        <MedicalPatientForm loading={loading} medicalPatient={medicalPatient} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
