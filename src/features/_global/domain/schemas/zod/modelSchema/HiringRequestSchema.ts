import { z } from 'zod';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema';

/////////////////////////////////////////
// HIRING REQUEST SCHEMA
/////////////////////////////////////////

export const HiringRequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().cuid(),
  correlative: z.number().int(),
  date: z.coerce.date(),
  directorateCodeReference: z.number().int().nullish(),
  justification: z.string().nullish(),
  departmentId: z.string().nullish(),
  investmentInitiativeId: z.string().nullish(),
  improvementProjectId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type HiringRequest = z.infer<typeof HiringRequestSchema>;

/////////////////////////////////////////
// HIRING REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const HiringRequestPartialSchema = HiringRequestSchema.partial();

export type HiringRequestPartial = z.infer<typeof HiringRequestPartialSchema>;

/////////////////////////////////////////
// HIRING REQUEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HiringRequestOptionalDefaultsSchema = HiringRequestSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    correlative: z.number().int().optional(),
    date: z.coerce.date().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type HiringRequestOptionalDefaults = z.infer<typeof HiringRequestOptionalDefaultsSchema>;

export default HiringRequestSchema;
