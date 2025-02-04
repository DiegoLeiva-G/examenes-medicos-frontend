import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { type FundingSourceType } from '../../domain';
import { createFundingSource } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { FundingSourceForm, type IFundingSourceFormValues } from '../components';

export const CreateFundingSourcePage: FC = () => {
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IFundingSourceFormValues) => {
      setLoading(true);

      createFundingSource
        .execute({
          name: formValues.name,
          type: formValues.type as FundingSourceType,
          enabled: formValues.enabled,
        })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de fuente de financiamiento';

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
              message: 'Se ha creado correctamente la fuente de financiamiento!',
            });

            navigate('/app/fuentes-de-financiamiento');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de fuente de financiamiento',
            type: 'error',
            message: 'No se pudo crear la fuente de financiamiento.',
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
        title: 'Fuentes de financiamiento',
        href: '/app/fuentes-de-financiamiento',
      },
      {
        title: 'Crear',
        href: '/app/fuentes-de-financiamiento/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title="Crear fuente de financiamiento - Sistema de Presupuesto" />
      <BreadCrumb title="Crear fuente de financiamiento" navItems={navItems} />
      <Container>
        <FundingSourceForm loading={loading} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
