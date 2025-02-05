import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { updateDoctor } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IDoctorFormValues, DoctorForm } from '../components';
import { type loaderDoctorUpdate } from '../dataFetching';

export const UpdateDoctorPage: FC = () => {
  const { doctorId, doctor } = useLoaderData<typeof loaderDoctorUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IDoctorFormValues) => {
      setLoading(true);

      updateDoctor
        .execute({ id: doctorId, ...formValues})
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición del médico';

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
              message: 'Se ha editado correctamente el médico!',
            });

            navigate('/medicos');

            return;
          }
        });
    },
    [navigate, setNotification, doctorId],
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
        title: 'Editar',
        href: `/medicos/${doctorId}/editar`,
      },
    ],
    [doctorId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar médico - Exámenes médicos`} />
      <BreadCrumb title={`Editar médico`} navItems={navItems} />
      <Container>
        <DoctorForm loading={loading} doctor={doctor} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
