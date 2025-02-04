import { z } from 'zod';

/////////////////////////////////////////
// CITIZEN REQUEST DERIVED SCHEMA
/////////////////////////////////////////

export const CitizenRequestDerivedSchema = z.object({
  id: z.string().cuid(),
  isRead: z.boolean(),
  directorateCodeReference: z.number().int().nullish(),
  departmentId: z.string().nullish(),
  citizenRequestId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type CitizenRequestDerived = z.infer<typeof CitizenRequestDerivedSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST DERIVED PARTIAL SCHEMA
/////////////////////////////////////////

export const CitizenRequestDerivedPartialSchema = CitizenRequestDerivedSchema.partial();

export type CitizenRequestDerivedPartial = z.infer<typeof CitizenRequestDerivedPartialSchema>;

/////////////////////////////////////////
// CITIZEN REQUEST DERIVED OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CitizenRequestDerivedOptionalDefaultsSchema = CitizenRequestDerivedSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    isRead: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type CitizenRequestDerivedOptionalDefaults = z.infer<typeof CitizenRequestDerivedOptionalDefaultsSchema>;

export default CitizenRequestDerivedSchema;
