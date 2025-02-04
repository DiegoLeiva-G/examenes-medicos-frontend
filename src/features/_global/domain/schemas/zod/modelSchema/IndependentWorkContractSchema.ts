import { z } from 'zod';
import { IndependentWorkContractTypeSchema } from '../inputTypeSchemas/IndependentWorkContractTypeSchema';
import { StudyLevelSchema } from '../inputTypeSchemas/StudyLevelSchema';
import { MonthSchema } from '../inputTypeSchemas/MonthSchema';
import { IndependentWorkContractStatusSchema } from '../inputTypeSchemas/IndependentWorkContractStatusSchema';

/////////////////////////////////////////
// INDEPENDENT WORK CONTRACT SCHEMA
/////////////////////////////////////////

export const IndependentWorkContractSchema = z.object({
  type: IndependentWorkContractTypeSchema,
  studyLevel: StudyLevelSchema,
  bonusMonths: MonthSchema.array(),
  status: IndependentWorkContractStatusSchema,
  id: z.string().cuid(),
  admissionDate: z.coerce.date(),
  address: z.string(),
  studyDescription: z.string(),
  email: z.string().nullish(),
  emergencyObservation: z.string().nullish(),
  startContractDate: z.coerce.date(),
  endContractDate: z.coerce.date(),
  amountWithoutDiscounts: z.number().int(),
  amountWithDiscounts: z.number().int(),
  decreeNumber: z.number().int(),
  accountCodeReference: z.number().int(),
  monthlyBonusAmount: z.number().int().nullish(),
  laborObservations: z.string().nullish(),
  observations: z.string().nullish(),
  directorateCodeReference: z.number().int().nullish(),
  approvalEmployeeId: z.string().nullish(),
  approvalDirectorateCodeReference: z.number().int().nullish(),
  informantEmployeeId: z.string().nullish(),
  informantDirectorateCodeReference: z.number().int().nullish(),
  departmentId: z.string().nullish(),
  employeeRoleId: z.string().nullish(),
  employeeLaborId: z.string().nullish(),
  cityId: z.string().nullish(),
  templateContractId: z.string().nullish(),
  workContractId: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type IndependentWorkContract = z.infer<typeof IndependentWorkContractSchema>;

/////////////////////////////////////////
// INDEPENDENT WORK CONTRACT PARTIAL SCHEMA
/////////////////////////////////////////

export const IndependentWorkContractPartialSchema = IndependentWorkContractSchema.partial();

export type IndependentWorkContractPartial = z.infer<typeof IndependentWorkContractPartialSchema>;

/////////////////////////////////////////
// INDEPENDENT WORK CONTRACT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IndependentWorkContractOptionalDefaultsSchema = IndependentWorkContractSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type IndependentWorkContractOptionalDefaults = z.infer<typeof IndependentWorkContractOptionalDefaultsSchema>;

export default IndependentWorkContractSchema;
