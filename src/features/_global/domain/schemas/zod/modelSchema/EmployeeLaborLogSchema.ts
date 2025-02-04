import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// EMPLOYEE LABOR LOG SCHEMA
/////////////////////////////////////////

export const EmployeeLaborLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  employeeLaborId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type EmployeeLaborLog = z.infer<typeof EmployeeLaborLogSchema>;

/////////////////////////////////////////
// EMPLOYEE LABOR LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeeLaborLogPartialSchema = EmployeeLaborLogSchema.partial();

export type EmployeeLaborLogPartial = z.infer<typeof EmployeeLaborLogPartialSchema>;

/////////////////////////////////////////
// EMPLOYEE LABOR LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeLaborLogOptionalDefaultsSchema = EmployeeLaborLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type EmployeeLaborLogOptionalDefaults = z.infer<typeof EmployeeLaborLogOptionalDefaultsSchema>;

export default EmployeeLaborLogSchema;
