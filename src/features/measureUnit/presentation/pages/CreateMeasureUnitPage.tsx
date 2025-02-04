import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { createMeasureUnit } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMeasureUnitFormValues, MeasureUnitForm } from '../components';

export const CreateMeasureUnitPage: FC = () => {
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMeasureUnitFormValues) => {
      setLoading(true);

      createMeasureUnit
        .execute({ name: formValues.name, enabled: formValues.enabled })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de unidad de medida';

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
              message: 'Se ha creado correctamente la unidad de medida!',
            });

            navigate('/app/unidades-de-medida');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de unidad de medida',
            type: 'error',
            message: 'No se pudo crear el usuario.',
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
        href: '/app/home',
      },
      {
        title: 'Unidades de medida',
        href: '/app/unidades-de-medida',
      },
      {
        title: 'Crear',
        href: '/app/unidades-de-medida/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear unidad de medida - Sistema de Presupuesto`} />
      <BreadCrumb title="Crear unidad de medida" navItems={navItems} />
      <Container>
        <MeasureUnitForm loading={loading} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
