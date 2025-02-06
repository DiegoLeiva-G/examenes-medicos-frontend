import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { createMedicalExaminationType } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalExaminationTypeFormValues, MedicalExaminationTypeForm } from '../components';
import type { MedicalExaminationType } from '../../domain';

export const CreateMedicalExaminationTypePage: FC = () => {
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalExaminationTypeFormValues) => {
      setLoading(true);

      createMedicalExaminationType
        .execute({ name: formValues.name, type: formValues.type as MedicalExaminationType })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de tipo de examen médico';

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
              message: 'Se ha creado correctamente el tipo de examen médico!',
            });

            navigate('/tipos-de-examenes-medicos');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de tipo de examen médico',
            type: 'error',
            message: 'No se pudo crear el tipo de examen médico.',
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
        title: 'Tipos de examenes médicos',
        href: '/tipos-de-examenes-medicos',
      },
      {
        title: 'Crear',
        href: '/tipos-de-examenes-medicos/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear tipo de examen médico - examenes médicos`} />
      <BreadCrumb title="Crear tipoo de examen médico" navItems={navItems} />
      <Container>
        <MedicalExaminationTypeForm loading={loading} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
