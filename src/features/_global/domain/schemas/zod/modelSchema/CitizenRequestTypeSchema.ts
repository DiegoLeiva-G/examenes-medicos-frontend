import { z } from 'zod';

/////////////////////////////////////////
// CITIZEN REQUEST TYPE SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  responseDays: z.number().int(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestType = z.infer<typeof CitizenRequestTypeSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypePartialSchema = CitizenRequestTypeSchema.partial();

export type CitizenRequestTypePartial = z.infer<typeof CitizenRequestTypePartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST TYPE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestTypeOptionalDefaultsSchema = CitizenRequestTypeSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    responseDays: z.number().int().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestTypeOptionalDefaults = z.infer<typeof CitizenRequestTypeOptionalDefaultsSchema>;

export default CitizenRequestTypeSchema;
