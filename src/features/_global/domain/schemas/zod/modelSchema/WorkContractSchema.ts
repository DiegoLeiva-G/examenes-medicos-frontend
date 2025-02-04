import { z } from 'zod';
import { WorkContractTypeSchema } from '../inputTypeSchemas/WorkContractTypeSchema';

/////////////////////////////////////////
// WORK CONTRACT SCHEMA
/////////////////////////////////////////

export const WorkContractSchema = z.object({
  type: WorkContractTypeSchema,
  id: z.string().cuid(),
  employeeId: z.string(),
});

export type WorkContract = z.infer<typeof WorkContractSchema>;

/////////////////////////////////////////
// WORK CONTRACT PARTIAL SCHEMA
/////////////////////////////////////////

export const WorkContractPartialSchema = WorkContractSchema.partial();

export type WorkContractPartial = z.infer<typeof WorkContractPartialSchema>;

/////////////////////////////////////////
// WORK CONTRACT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkContractOptionalDefaultsSchema = WorkContractSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
  }),
);

export type WorkContractOptionalDefaults = z.infer<typeof WorkContractOptionalDefaultsSchema>;

export default WorkContractSchema;
