import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { createMedicalExamination } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IMedicalExaminationFormValues, MedicalExaminationForm } from '../components';
import { type loaderMedicalExaminationCreate } from '../dataFetching';

export const CreateMedicalExaminationPage: FC = () => {
  const { medicalPatients, medicalExaminationTypes, doctors } = useLoaderData<typeof loaderMedicalExaminationCreate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalExaminationFormValues) => {
      setLoading(true);

      createMedicalExamination
        .execute({  ...formValues, dateExam: formValues.dateExam.toISOString(), })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de examen médico';

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
              message: 'Se ha creado correctamente el examen médico!',
            });

            navigate('/examenes-medicos');
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de examen médico',
            type: 'error',
            message: 'No se pudo crear el examen médico.',
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
        title: 'Examenes médicos',
        href: '/examenes-medicos',
      },
      {
        title: 'Crear',
        href: '/examenes-medicos/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear examen médico - Examenes médicos`} />
      <BreadCrumb title="Crear examen médico" navItems={navItems} />
      <Container>
        <MedicalExaminationForm
          loading={loading}
          onSubmitData={handleOnSubmit}
          medicalPatients={medicalPatients}
          medicalExaminationTypes={medicalExaminationTypes}
          doctors={doctors}
        />
      </Container>
    </>
  );
};
