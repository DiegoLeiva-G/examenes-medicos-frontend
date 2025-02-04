import { z } from 'zod';

/////////////////////////////////////////
// EMPLOYEE LABOR SCHEMA
/////////////////////////////////////////

export const EmployeeLaborSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type EmployeeLabor = z.infer<typeof EmployeeLaborSchema>;

/////////////////////////////////////////
// EMPLOYEE LABOR PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeeLaborPartialSchema = EmployeeLaborSchema.partial();

export type EmployeeLaborPartial = z.infer<typeof EmployeeLaborPartialSchema>;

/////////////////////////////////////////
// EMPLOYEE LABOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeLaborOptionalDefaultsSchema = EmployeeLaborSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type EmployeeLaborOptionalDefaults = z.infer<typeof EmployeeLaborOptionalDefaultsSchema>;

export default EmployeeLaborSchema;
