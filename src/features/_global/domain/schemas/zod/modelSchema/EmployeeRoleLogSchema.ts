import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// EMPLOYEE ROLE LOG SCHEMA
/////////////////////////////////////////

export const EmployeeRoleLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  employeeRoleId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type EmployeeRoleLog = z.infer<typeof EmployeeRoleLogSchema>;

/////////////////////////////////////////
// EMPLOYEE ROLE LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeeRoleLogPartialSchema = EmployeeRoleLogSchema.partial();

export type EmployeeRoleLogPartial = z.infer<typeof EmployeeRoleLogPartialSchema>;

/////////////////////////////////////////
// EMPLOYEE ROLE LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeRoleLogOptionalDefaultsSchema = EmployeeRoleLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type EmployeeRoleLogOptionalDefaults = z.infer<typeof EmployeeRoleLogOptionalDefaultsSchema>;

export default EmployeeRoleLogSchema;
