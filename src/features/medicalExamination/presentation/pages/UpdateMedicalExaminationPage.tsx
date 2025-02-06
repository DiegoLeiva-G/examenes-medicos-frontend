import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalExaminationFormValues, MedicalExaminationForm } from '../components';
import { type loaderMedicalExaminationUpdate } from '../dataFetching';
import { updateMedicalExamination } from './controller.ts';

export const UpdateMedicalExaminationPage: FC = () => {
  const { medicalExaminationId, medicalExamination, medicalPatients, medicalExaminationTypes, doctors } =
    useLoaderData<typeof loaderMedicalExaminationUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalExaminationFormValues) => {
      setLoading(true);

      updateMedicalExamination
        .execute({
          ...formValues,
          id: medicalExaminationId,
          dateExam: formValues.dateExam ? new Date(formValues.dateExam).toISOString() : undefined,
        })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición del examen médico';

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
              message: 'Se ha editado correctamente el examen médico!',
            });

            navigate('/examenes-medicos');

            return;
          }
        });
    },
    [navigate, setNotification, medicalExaminationId],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Examenes médicos',
        href: '/examenes-medicos',
      },
      {
        title: 'Editar',
        href: `/examenes-medicos/${medicalExaminationId}/editar`,
      },
    ],
    [medicalExaminationId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar examen médico - Examenes médicos`} />
      <BreadCrumb title={`Editar examen médico`} navItems={navItems} />
      <Container>
        <MedicalExaminationForm
          loading={loading}
          medicalExamination={medicalExamination}
          onSubmitData={handleOnSubmit}
          medicalPatients={medicalPatients}
          medicalExaminationTypes={medicalExaminationTypes}
          doctors={doctors}
        />
      </Container>
    </>
  );
};
