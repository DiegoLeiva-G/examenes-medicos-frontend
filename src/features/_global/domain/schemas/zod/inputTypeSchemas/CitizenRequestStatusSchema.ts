import { z } from 'zod';

export const CitizenRequestStatusSchema = z.enum(['Discarded', 'Received', 'InProgress', 'Finished']);

export type CitizenRequestStatusType = `${z.infer<typeof CitizenRequestStatusSchema>}`;

export default CitizenRequestStatusSchema;
