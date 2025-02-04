import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE LOG SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeeLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  userId: z.string().nullish(),
  directorateEmployeeId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type DirectorateEmployeeLog = z.infer<typeof DirectorateEmployeeLogSchema>;

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeeLogPartialSchema = DirectorateEmployeeLogSchema.partial();

export type DirectorateEmployeeLogPartial = z.infer<typeof DirectorateEmployeeLogPartialSchema>;

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeeLogOptionalDefaultsSchema = DirectorateEmployeeLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type DirectorateEmployeeLogOptionalDefaults = z.infer<typeof DirectorateEmployeeLogOptionalDefaultsSchema>;

export default DirectorateEmployeeLogSchema;
