import { z } from 'zod';

export const MonthlyReportScalarFieldEnumSchema = z.enum([
  'id',
  'internalId',
  'year',
  'date',
  'labors',
  'directorateCodeReference',
  'costCenterCodeReference',
  'contractStartDate',
  'contractEndDate',
  'decreeNumber',
  'month',
  'detail',
  'honoraryTicketUrl',
  'employeeId',
  'departmentId',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default MonthlyReportScalarFieldEnumSchema;
