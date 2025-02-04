import { z } from 'zod';

export const RequestStatusSchema = z.enum([
  'Created',
  'Canceled',
  'Sent',
  'Approved',
  'Rejected',
  'ApprovedByAccounting',
  'RejectedByAccounting',
  'ApprovedByControl',
  'RejectedByControl',
  'ApprovedByAdministration',
  'RejectedByAdministration',
]);

export type RequestStatusType = `${z.infer<typeof RequestStatusSchema>}`;

export default RequestStatusSchema;
