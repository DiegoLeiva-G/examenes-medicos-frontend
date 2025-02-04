import { z } from 'zod';

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalarySchema = z.object({
  id: z.string().cuid(),
  managementAreaCodeReference: z.number().int(),
  directorateCodeReference: z.number().int(),
  costCenterCodeReference: z.number().int(),
  observation: z.string().nullish(),
  plannerId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type PlannerCouncilorSalary = z.infer<typeof PlannerCouncilorSalarySchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY PARTIAL SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryPartialSchema = PlannerCouncilorSalarySchema.partial();

export type PlannerCouncilorSalaryPartial = z.infer<typeof PlannerCouncilorSalaryPartialSchema>;

/////////////////////////////////////////
// PLANNER COUNCILOR SALARY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PlannerCouncilorSalaryOptionalDefaultsSchema = PlannerCouncilorSalarySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PlannerCouncilorSalaryOptionalDefaults = z.infer<typeof PlannerCouncilorSalaryOptionalDefaultsSchema>;

export default PlannerCouncilorSalarySchema;
