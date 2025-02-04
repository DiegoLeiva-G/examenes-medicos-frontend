import { z } from 'zod';

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeeSchema = z.object({
  id: z.string().cuid(),
  directorateCodeReference: z.number().int(),
  employeeResponsibleId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type DirectorateEmployee = z.infer<typeof DirectorateEmployeeSchema>;

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE PARTIAL SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeePartialSchema = DirectorateEmployeeSchema.partial();

export type DirectorateEmployeePartial = z.infer<typeof DirectorateEmployeePartialSchema>;

/////////////////////////////////////////
// DIRECTORATE EMPLOYEE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DirectorateEmployeeOptionalDefaultsSchema = DirectorateEmployeeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type DirectorateEmployeeOptionalDefaults = z.infer<typeof DirectorateEmployeeOptionalDefaultsSchema>;

export default DirectorateEmployeeSchema;
