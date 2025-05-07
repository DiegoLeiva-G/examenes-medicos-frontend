import { type FC, useCallback, useMemo } from 'react';
import { useNotification } from '@core/contexts';
import { useNavigate } from 'react-router-dom';
import { RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { type IAudioFormValues, AudioForm } from '../components';

export const CreateAudioPage: FC = () => {
  const { setNotification } = useNotification();
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IAudioFormValues) => {
      console.log('Audio guardado:', formValues);

      setNotification({
        title: 'Creación de audio',
        type: 'success',
        message: 'Se ha procesado y guardado correctamente',
      });

      navigate('/audios');
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
        title: 'Audios',
        href: '/audios',
      },
      {
        title: 'Crear',
        href: '/audios/crear',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Crear audio - Exámenes médicos`} />
      <BreadCrumb title="Crear audio" navItems={navItems} />
      <Container>
        <AudioForm  onSubmitData={handleOnSubmit} />
      </Container>
    </>
  );
};
