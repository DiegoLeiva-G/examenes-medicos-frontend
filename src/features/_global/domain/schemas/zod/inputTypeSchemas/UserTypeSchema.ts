import { z } from 'zod';

export const UserTypeSchema = z.enum(['Local', 'ClaveUnica']);

export type UserTypeType = `${z.infer<typeof UserTypeSchema>}`;

export default UserTypeSchema;
