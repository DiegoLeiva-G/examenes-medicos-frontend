import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema';

/////////////////////////////////////////
// HIRING REQUEST LOG SCHEMA
/////////////////////////////////////////

export const HiringRequestLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  status: RequestStatusSchema,
  id: z.string().cuid(),
  observation: z.string().nullish(),
  hiringRequestId: z.string(),
  createdAt: z.coerce.date(),
});

export type HiringRequestLog = z.infer<typeof HiringRequestLogSchema>;

/////////////////////////////////////////
// HIRING REQUEST LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const HiringRequestLogPartialSchema = HiringRequestLogSchema.partial();

export type HiringRequestLogPartial = z.infer<typeof HiringRequestLogPartialSchema>;

/////////////////////////////////////////
// HIRING REQUEST LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HiringRequestLogOptionalDefaultsSchema = HiringRequestLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type HiringRequestLogOptionalDefaults = z.infer<typeof HiringRequestLogOptionalDefaultsSchema>;

export default HiringRequestLogSchema;
