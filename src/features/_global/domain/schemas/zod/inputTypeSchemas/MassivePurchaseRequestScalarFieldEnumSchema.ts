import { z } from 'zod';

export const MassivePurchaseRequestScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'correlative',
  'date',
  'directorateCodeReference',
  'accountPlanCodeReference',
  'purchaseProvider',
  'justification',
  'startDate',
  'endDate',
  'status',
  'departmentId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default MassivePurchaseRequestScalarFieldEnumSchema;
