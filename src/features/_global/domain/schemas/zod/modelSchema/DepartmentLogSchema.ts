import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// DEPARTMENT LOG SCHEMA
/////////////////////////////////////////

export const DepartmentLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  departmentId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type DepartmentLog = z.infer<typeof DepartmentLogSchema>;

/////////////////////////////////////////
// DEPARTMENT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const DepartmentLogPartialSchema = DepartmentLogSchema.partial();

export type DepartmentLogPartial = z.infer<typeof DepartmentLogPartialSchema>;

/////////////////////////////////////////
// DEPARTMENT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DepartmentLogOptionalDefaultsSchema = DepartmentLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type DepartmentLogOptionalDefaults = z.infer<typeof DepartmentLogOptionalDefaultsSchema>;

export default DepartmentLogSchema;
