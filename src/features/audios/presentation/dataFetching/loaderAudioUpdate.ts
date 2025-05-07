import { type LoaderFunctionArgs } from 'react-router-dom';
import { getAudioById } from '../pages';

export const loaderAudioUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { audioId = '' } = params;

  const { data: audio, error: errorAudio } = await getAudioById.execute(audioId);

  if (!audio || errorAudio) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    audio,
    audioId,
  };
};
