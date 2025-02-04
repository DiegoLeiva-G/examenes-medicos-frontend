import { z } from 'zod';
import { IndependentWorkContractTypeSchema } from '../inputTypeSchemas/IndependentWorkContractTypeSchema';

/////////////////////////////////////////
// TEMPLATE INDEPENDENT WORK CONTRACT SCHEMA
/////////////////////////////////////////

export const TemplateIndependentWorkContractSchema = z.object({
  type: IndependentWorkContractTypeSchema,
  id: z.string().cuid(),
  name: z.string(),
  year: z.number().int(),
  attachment: z.string(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type TemplateIndependentWorkContract = z.infer<typeof TemplateIndependentWorkContractSchema>;

/////////////////////////////////////////
// TEMPLATE INDEPENDENT WORK CONTRACT PARTIAL SCHEMA
/////////////////////////////////////////

export const TemplateIndependentWorkContractPartialSchema = TemplateIndependentWorkContractSchema.partial();

export type TemplateIndependentWorkContractPartial = z.infer<typeof TemplateIndependentWorkContractPartialSchema>;

/////////////////////////////////////////
// TEMPLATE INDEPENDENT WORK CONTRACT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TemplateIndependentWorkContractOptionalDefaultsSchema = TemplateIndependentWorkContractSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type TemplateIndependentWorkContractOptionalDefaults = z.infer<
  typeof TemplateIndependentWorkContractOptionalDefaultsSchema
>;

export default TemplateIndependentWorkContractSchema;
