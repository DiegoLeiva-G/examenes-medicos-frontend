import { LocationDatasourceImpl, LocationRepositoryImpl } from '../infrastructure';
import { GetStateById, GetStatesToSelect, GetSubStatesByStateIdToSelect } from '../domain';

const locationDatasourceImpl = new LocationDatasourceImpl();
const locationRepositoryImpl = new LocationRepositoryImpl(locationDatasourceImpl);

export const getStatesToSelect = new GetStatesToSelect(locationRepositoryImpl);
export const getStateById = new GetStateById(locationRepositoryImpl);
export const getSubStatesByStateIdToSelect = new GetSubStatesByStateIdToSelect(locationRepositoryImpl);
