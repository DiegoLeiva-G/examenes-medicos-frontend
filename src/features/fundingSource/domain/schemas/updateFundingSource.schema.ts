import { FundingSourcePartialSchema } from '../../../_global';

export const updateFundingSourceSchema = FundingSourcePartialSchema.omit({
  archived: true,
  createdAt: true,
  updatedAt: true,
});
