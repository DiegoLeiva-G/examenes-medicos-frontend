import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// EMPLOYEE LOG SCHEMA
/////////////////////////////////////////

export const EmployeeLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  employeeId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type EmployeeLog = z.infer<typeof EmployeeLogSchema>;

/////////////////////////////////////////
// EMPLOYEE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeeLogPartialSchema = EmployeeLogSchema.partial();

export type EmployeeLogPartial = z.infer<typeof EmployeeLogPartialSchema>;

/////////////////////////////////////////
// EMPLOYEE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeLogOptionalDefaultsSchema = EmployeeLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type EmployeeLogOptionalDefaults = z.infer<typeof EmployeeLogOptionalDefaultsSchema>;

export default EmployeeLogSchema;
