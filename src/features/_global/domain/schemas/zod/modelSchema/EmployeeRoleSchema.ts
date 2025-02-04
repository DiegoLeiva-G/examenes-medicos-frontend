import { z } from 'zod';

/////////////////////////////////////////
// EMPLOYEE ROLE SCHEMA
/////////////////////////////////////////

export const EmployeeRoleSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type EmployeeRole = z.infer<typeof EmployeeRoleSchema>;

/////////////////////////////////////////
// EMPLOYEE ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeeRolePartialSchema = EmployeeRoleSchema.partial();

export type EmployeeRolePartial = z.infer<typeof EmployeeRolePartialSchema>;

/////////////////////////////////////////
// EMPLOYEE ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeRoleOptionalDefaultsSchema = EmployeeRoleSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type EmployeeRoleOptionalDefaults = z.infer<typeof EmployeeRoleOptionalDefaultsSchema>;

export default EmployeeRoleSchema;
