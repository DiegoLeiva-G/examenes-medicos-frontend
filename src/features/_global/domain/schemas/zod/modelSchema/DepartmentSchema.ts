import { z } from 'zod';

/////////////////////////////////////////
// DEPARTMENT SCHEMA
/////////////////////////////////////////

export const DepartmentSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  directorateCodeReference: z.number().int(),
  description: z.string().nullish(),
  correlative: z.number().int(),
  code: z.string().nullish(),
  subDepartmentId: z.string().nullish(),
  employeeResponsibleId: z.string().nullish(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Department = z.infer<typeof DepartmentSchema>;

/////////////////////////////////////////
// DEPARTMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const DepartmentPartialSchema = DepartmentSchema.partial();

export type DepartmentPartial = z.infer<typeof DepartmentPartialSchema>;

/////////////////////////////////////////
// DEPARTMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DepartmentOptionalDefaultsSchema = DepartmentSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    correlative: z.number().int().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type DepartmentOptionalDefaults = z.infer<typeof DepartmentOptionalDefaultsSchema>;

export default DepartmentSchema;
