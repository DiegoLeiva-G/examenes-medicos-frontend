import { z } from 'zod';

/////////////////////////////////////////
// PLADECO SCHEMA
/////////////////////////////////////////

export const PladecoSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  enabled: z.boolean(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Pladeco = z.infer<typeof PladecoSchema>;

/////////////////////////////////////////
// PLADECO PARTIAL SCHEMA
/////////////////////////////////////////

export const PladecoPartialSchema = PladecoSchema.partial();

export type PladecoPartial = z.infer<typeof PladecoPartialSchema>;

/////////////////////////////////////////
// PLADECO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PladecoOptionalDefaultsSchema = PladecoSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    enabled: z.boolean().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type PladecoOptionalDefaults = z.infer<typeof PladecoOptionalDefaultsSchema>;

export default PladecoSchema;
