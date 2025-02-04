import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { updateMeasureUnit } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMeasureUnitFormValues, MeasureUnitForm } from '../components';
import { type loaderMeasureUnitUpdate } from '../dataFetching';

export const UpdateMeasureUnitPage: FC = () => {
  const { measureUnitId, measureUnitData } = useLoaderData<typeof loaderMeasureUnitUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMeasureUnitFormValues) => {
      setLoading(true);

      updateMeasureUnit
        .execute({ id: measureUnitId, name: formValues.name, enabled: formValues.enabled })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición de unidad de medida';

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
              message: 'Se ha editado correctamente la unidad de medida!',
            });

            navigate('/app/unidades-de-medida');

            return;
          }
        });
    },
    [navigate, setNotification, measureUnitId],
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
        title: 'Editar',
        href: `/app/unidades-de-medida/${measureUnitId}/editar`,
      },
    ],
    [measureUnitId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar unidad de medida - Sistema de Presupuesto`} />
      <BreadCrumb title={`Editar unidad de medida`} navItems={navItems} />
      <Container>
        <MeasureUnitForm loading={loading} measureUnit={measureUnitData} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
