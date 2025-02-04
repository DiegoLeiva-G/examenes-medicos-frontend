import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';
import { PmgStatusSchema } from '../inputTypeSchemas/PmgStatusSchema';

/////////////////////////////////////////
// PMG LOG SCHEMA
/////////////////////////////////////////

export const PmgLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  status: PmgStatusSchema,
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  userId: z.string().nullish(),
  pmgId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type PmgLog = z.infer<typeof PmgLogSchema>;

/////////////////////////////////////////
// PMG LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const PmgLogPartialSchema = PmgLogSchema.partial();

export type PmgLogPartial = z.infer<typeof PmgLogPartialSchema>;

/////////////////////////////////////////
// PMG LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PmgLogOptionalDefaultsSchema = PmgLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type PmgLogOptionalDefaults = z.infer<typeof PmgLogOptionalDefaultsSchema>;

export default PmgLogSchema;
