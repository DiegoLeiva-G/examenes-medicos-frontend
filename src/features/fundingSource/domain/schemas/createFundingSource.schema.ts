import { FundingSourceOptionalDefaultsSchema } from '../../../_global';

export const createFundingSourceSchema = FundingSourceOptionalDefaultsSchema.omit({
  id: true,
  archived: true,
  createdAt: true,
  updatedAt: true,
});
