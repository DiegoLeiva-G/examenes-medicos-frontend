import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// IMPROVEMENT PROJECT LOG SCHEMA
/////////////////////////////////////////

export const ImprovementProjectLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  improvementProjectId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type ImprovementProjectLog = z.infer<typeof ImprovementProjectLogSchema>;

/////////////////////////////////////////
// IMPROVEMENT PROJECT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const ImprovementProjectLogPartialSchema = ImprovementProjectLogSchema.partial();

export type ImprovementProjectLogPartial = z.infer<typeof ImprovementProjectLogPartialSchema>;

/////////////////////////////////////////
// IMPROVEMENT PROJECT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ImprovementProjectLogOptionalDefaultsSchema = ImprovementProjectLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type ImprovementProjectLogOptionalDefaults = z.infer<typeof ImprovementProjectLogOptionalDefaultsSchema>;

export default ImprovementProjectLogSchema;
