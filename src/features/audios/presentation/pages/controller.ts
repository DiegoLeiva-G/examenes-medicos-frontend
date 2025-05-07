import { AudioDatasourceImpl, AudioRepositoryImpl } from '../../infrastructure';
import { CreateAudio, DeleteAudio, GetAudioById, GetAudios, UpdateAudio } from '../../domain';

const audioDatasourceImpl = new AudioDatasourceImpl();
const audioRepositoryImpl = new AudioRepositoryImpl(audioDatasourceImpl);

export const getAudios = new GetAudios(audioRepositoryImpl);
export const getAudioById = new GetAudioById(audioRepositoryImpl);
export const createAudio = new CreateAudio(audioRepositoryImpl);
export const updateAudio = new UpdateAudio(audioRepositoryImpl);
export const deleteAudio = new DeleteAudio(audioRepositoryImpl);
