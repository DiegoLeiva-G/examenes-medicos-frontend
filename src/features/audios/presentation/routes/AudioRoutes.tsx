import { CreateAudioPage, AudioListPage, UpdateAudioPage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import { loaderAudioList, loaderAudioUpdate } from '../dataFetching';

export const AudioRoutes: RouteObject[] = [
  {
    path: 'audios',
    element: <AudioListPage />,
    loader: loaderAudioList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'audios/crear',
    element: <CreateAudioPage />,
  },
  {
    path: 'audios/:audioId/editar',
    element: <UpdateAudioPage />,
    loader: loaderAudioUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
