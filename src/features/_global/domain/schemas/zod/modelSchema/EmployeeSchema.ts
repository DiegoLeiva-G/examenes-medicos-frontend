import { z } from 'zod';
import { StudyLevelSchema } from '../inputTypeSchemas/StudyLevelSchema';

/////////////////////////////////////////
// EMPLOYEE SCHEMA
/////////////////////////////////////////

export const EmployeeSchema = z.object({
  studyLevel: StudyLevelSchema.nullish(),
  id: z.string().cuid(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  studyDescription: z.string().nullish(),
  personId: z.string().nullish(),
  userId: z.string().nullish(),
  cityId: z.string().nullish(),
  employeeRoleId: z.string().nullish(),
  employeeLaborId: z.string().nullish(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Employee = z.infer<typeof EmployeeSchema>;

/////////////////////////////////////////
// EMPLOYEE PARTIAL SCHEMA
/////////////////////////////////////////

export const EmployeePartialSchema = EmployeeSchema.partial();

export type EmployeePartial = z.infer<typeof EmployeePartialSchema>;

/////////////////////////////////////////
// EMPLOYEE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EmployeeOptionalDefaultsSchema = EmployeeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type EmployeeOptionalDefaults = z.infer<typeof EmployeeOptionalDefaultsSchema>;

export default EmployeeSchema;
