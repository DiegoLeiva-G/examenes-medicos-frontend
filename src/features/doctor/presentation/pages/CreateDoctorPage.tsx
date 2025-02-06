import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { createDoctor } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IDoctorFormValues, DoctorForm } from '../components';

export const CreateDoctorPage: FC = () => {
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IDoctorFormValues) => {
      setLoading(true);

      createDoctor
        .execute(formValues)
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de médico';

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
              message: 'Se ha creado correctamente el médico!',
            });

            navigate('/medicos');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de médico',
            type: 'error',
            message: 'No se pudo crear el médico.',
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
        title: 'Médicos',
        href: '/medicos',
      },
      {
        title: 'Crear',
        href: '/medicos/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear médico - Examenes médicos`} />
      <BreadCrumb title="Crear médico" navItems={navItems} />
      <Container>
        <DoctorForm loading={loading} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
