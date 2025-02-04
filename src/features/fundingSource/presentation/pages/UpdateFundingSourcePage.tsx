import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { type FundingSourceType } from '../../domain';
import { updateFundingSource } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { FundingSourceForm, type IFundingSourceFormValues } from '../components';
import { type loaderFundingSourceUpdate } from '../dataFetching';

export const UpdateFundingSourcePage: FC = () => {
  const { fundingSourceData, fundingSourceId } = useLoaderData<typeof loaderFundingSourceUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IFundingSourceFormValues) => {
      setLoading(true);

      updateFundingSource
        .execute({
          ...formValues,
          id: fundingSourceId,
          type: formValues.type as FundingSourceType,
          enabled: formValues.enabled,
        })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición de fuente de financiamiento';

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
              message: 'Se ha editado correctamente la fuente de financiamiento!',
            });

            navigate('/app/fuentes-de-financiamiento');

            return;
          }
        });
    },
    [navigate, setNotification, fundingSourceId],
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
        title: 'Editar',
        href: `/app/fuentes-de-financiamiento/${fundingSourceId}/editar`,
      },
    ],
    [fundingSourceId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar fuente de financiamiento - Sistema de Presupuesto`} />
      <BreadCrumb title={`Editar fuente de financiamiento`} navItems={navItems} />
      <Container>
        <FundingSourceForm loading={loading} fundingSource={fundingSourceData} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
