import { z } from 'zod';

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  directorateReferenceCode: z.number().int().array(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestCategory = z.infer<typeof CitizenRequestCategorySchema>;

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategoryPartialSchema = CitizenRequestCategorySchema.partial();

export type CitizenRequestCategoryPartial = z.infer<typeof CitizenRequestCategoryPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestCategoryOptionalDefaultsSchema = CitizenRequestCategorySchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestCategoryOptionalDefaults = z.infer<typeof CitizenRequestCategoryOptionalDefaultsSchema>;

export default CitizenRequestCategorySchema;
