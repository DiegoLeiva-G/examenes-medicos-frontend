import { z } from 'zod';

/////////////////////////////////////////
// IMPROVEMENT PROJECT SCHEMA
/////////////////////////////////////////

export const ImprovementProjectSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  directorateResponsibleCodeReference: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  legalNorms: z.string(),
  fundingSourceId: z.string().nullish(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ImprovementProject = z.infer<typeof ImprovementProjectSchema>;

/////////////////////////////////////////
// IMPROVEMENT PROJECT PARTIAL SCHEMA
/////////////////////////////////////////

export const ImprovementProjectPartialSchema = ImprovementProjectSchema.partial();

export type ImprovementProjectPartial = z.infer<typeof ImprovementProjectPartialSchema>;

/////////////////////////////////////////
// IMPROVEMENT PROJECT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ImprovementProjectOptionalDefaultsSchema = ImprovementProjectSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type ImprovementProjectOptionalDefaults = z.infer<typeof ImprovementProjectOptionalDefaultsSchema>;

export default ImprovementProjectSchema;
