import { type FC, useCallback, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { updateAudio } from './controller.ts';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IAudioFormValues, AudioForm } from '../components';
import { type loaderAudioUpdate } from '../dataFetching';

export const UpdateAudioPage: FC = () => {
  const { audioId, audio } = useLoaderData<typeof loaderAudioUpdate>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IAudioFormValues) => {
      setLoading(true);

      updateAudio
        .execute({ id: audioId, ...formValues})
        .then(response => {
          setLoading(false);
          const titleNotification = 'Edición del audio';

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
              message: 'Se ha editado correctamente el audio!',
            });

            navigate('/audios');

            return;
          }
        });
    },
    [navigate, setNotification, audioId],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Audios',
        href: '/audios',
      },
      {
        title: 'Editar',
        href: `/audios/${audioId}/editar`,
      },
    ],
    [audioId],
  );

  return (
    <>
      <DocumentMetadata title={`Editar audio - Exámenes médicos`} />
      <BreadCrumb title={`Editar médico`} navItems={navItems} />
      <Container>
        <AudioForm loading={loading} audio={audio} onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
