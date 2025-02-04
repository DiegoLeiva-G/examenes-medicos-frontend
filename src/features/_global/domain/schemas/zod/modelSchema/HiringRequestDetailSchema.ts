import { z } from 'zod';

/////////////////////////////////////////
// HIRING REQUEST DETAIL SCHEMA
/////////////////////////////////////////

export const HiringRequestDetailSchema = z.object({
  id: z.string().cuid(),
  quantity: z.number().int(),
  unitAmount: z.number().int(),
  totalAmount: z.number().int(),
  hiringRequestId: z.string().nullish(),
  plannerHiringTaskId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
});

export type HiringRequestDetail = z.infer<typeof HiringRequestDetailSchema>;

/////////////////////////////////////////
// HIRING REQUEST DETAIL PARTIAL SCHEMA
/////////////////////////////////////////

export const HiringRequestDetailPartialSchema = HiringRequestDetailSchema.partial();

export type HiringRequestDetailPartial = z.infer<typeof HiringRequestDetailPartialSchema>;

/////////////////////////////////////////
// HIRING REQUEST DETAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HiringRequestDetailOptionalDefaultsSchema = HiringRequestDetailSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type HiringRequestDetailOptionalDefaults = z.infer<typeof HiringRequestDetailOptionalDefaultsSchema>;

export default HiringRequestDetailSchema;
