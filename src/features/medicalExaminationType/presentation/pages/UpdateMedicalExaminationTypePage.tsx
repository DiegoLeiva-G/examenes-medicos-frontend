import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalExaminationTypeFormValues, MedicalExaminationTypeForm } from '../components';
import { type loaderMedicalExaminationTypeUpdate } from '../dataFetching';
import { updateMedicalExaminationType } from './controller.ts';
import { type MedicalExaminationType } from '../../domain';

export const UpdateMedicalExaminationTypePage: FC = () => {
  const { medicalExaminationTypeId, medicalExaminationType } =
    useLoaderData<typeof loaderMedicalExaminationTypeUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalExaminationTypeFormValues) => {
      setLoading(true);

      updateMedicalExaminationType
        .execute({
          ...formValues,
          id: medicalExaminationTypeId,
          name: formValues.name,
          type: formValues.type as MedicalExaminationType,
        })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición del tipo de examen médico';

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
              message: 'Se ha editado correctamente el tipo de examen médico!',
            });

            navigate('/tipos-de-examenes-medicos');

            return;
          }
        });
    },
    [navigate, setNotification, medicalExaminationTypeId],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Tipos de examen médicos',
        href: '/tipos-de-examenes-medicos',
      },
      {
        title: 'Editar',
        href: `/tipos-de-examenes-medicos/${medicalExaminationTypeId}/editar`,
      },
    ],
    [medicalExaminationTypeId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar tipo de examen médico - examenes médicos`} />
      <BreadCrumb title={`Editar tipo de examen médico`} navItems={navItems} />
      <Container>
        <MedicalExaminationTypeForm
          loading={loading}
          medicalExaminationType={medicalExaminationType}
          onSubmitData={handleOnSubmit}
        />
      </Container>
    </>
  );
};
