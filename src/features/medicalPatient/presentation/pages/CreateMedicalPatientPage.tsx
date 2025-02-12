import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { createMedicalPatient } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalPatientFormValues, MedicalPatientForm } from '../components';

export const CreateMedicalPatientPage: FC = () => {
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalPatientFormValues) => {
      setLoading(true);

      createMedicalPatient
        .execute({  ...formValues, fur: formValues.fur.toISOString() })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de paciente médico';

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
              message: 'Se ha creado correctamente el paciente médico!',
            });

            navigate('/pacientes-medicos');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de paciente médico',
            type: 'error',
            message: 'No se pudo crear el paciente médico.',
          });
        });
    },
    [navigate, setNotification],
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
        title: 'Crear',
        href: '/pacientes-medicos/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear paciente médico - Examenes médicos`} />
      <BreadCrumb title="Crear paciente médico" navItems={navItems} />
      <Container>
        <MedicalPatientForm loading={loading} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
