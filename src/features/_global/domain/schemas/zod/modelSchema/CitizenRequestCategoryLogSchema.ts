import { z } from 'zod';
import { ActionLogSchema } from '../inputTypeSchemas/ActionLogSchema';

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY LOG SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategoryLogSchema = z.object({
  action: ActionLogSchema.nullish(),
  id: z.string().cuid(),
  observations: z.string().nullish(),
  ip: z.string().nullish(),
  citizenRequestCategoryId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.coerce.date(),
});

export type CitizenRequestCategoryLog = z.infer<typeof CitizenRequestCategoryLogSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategoryLogPartialSchema = CitizenRequestCategoryLogSchema.partial();

export type CitizenRequestCategoryLogPartial = z.infer<typeof CitizenRequestCategoryLogPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategoryLogOptionalDefaultsSchema = CitizenRequestCategoryLogSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestCategoryLogOptionalDefaults = z.infer<typeof CitizenRequestCategoryLogOptionalDefaultsSchema>;

export default CitizenRequestCategoryLogSchema;
