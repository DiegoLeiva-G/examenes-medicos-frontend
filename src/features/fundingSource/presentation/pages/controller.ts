import {
  CreateFundingSource,
  DeleteFundingSource,
  GetFundingSourceById,
  GetFundingSources,
  UpdateFundingSource,
} from '../../domain';
import { FundingSourceDatasourceImpl, FundingSourceRepositoryImpl } from '../../infrastructure';

const fundingSourceDatasourceImpl = new FundingSourceDatasourceImpl();
const fundingSourceRepositoryImpl = new FundingSourceRepositoryImpl(fundingSourceDatasourceImpl);

export const getFundingSources = new GetFundingSources(fundingSourceRepositoryImpl);
export const getFundingSourceById = new GetFundingSourceById(fundingSourceRepositoryImpl);
export const createFundingSource = new CreateFundingSource(fundingSourceRepositoryImpl);
export const updateFundingSource = new UpdateFundingSource(fundingSourceRepositoryImpl);
export const deleteFundingSource = new DeleteFundingSource(fundingSourceRepositoryImpl);
