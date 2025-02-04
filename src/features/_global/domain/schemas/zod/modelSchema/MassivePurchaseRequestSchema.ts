import { z } from 'zod';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema';

/////////////////////////////////////////
// MASSIVE PURCHASE REQUEST SCHEMA
/////////////////////////////////////////

export const MassivePurchaseRequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  correlative: z.number().int(),
  date: z.coerce.date(),
  directorateCodeReference: z.number().int().nullish(),
  accountPlanCodeReference: z.string().array(),
  purchaseProvider: z.string().nullish(),
  justification: z.string().nullish(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  departmentId: z.string().nullish(),
  archived: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type MassivePurchaseRequest = z.infer<typeof MassivePurchaseRequestSchema>;

/////////////////////////////////////////
// MASSIVE PURCHASE REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const MassivePurchaseRequestPartialSchema = MassivePurchaseRequestSchema.partial();

export type MassivePurchaseRequestPartial = z.infer<typeof MassivePurchaseRequestPartialSchema>;

/////////////////////////////////////////
// MASSIVE PURCHASE REQUEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MassivePurchaseRequestOptionalDefaultsSchema = MassivePurchaseRequestSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
    correlative: z.number().int().optional(),
    date: z.coerce.date().optional(),
    archived: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
);

export type MassivePurchaseRequestOptionalDefaults = z.infer<typeof MassivePurchaseRequestOptionalDefaultsSchema>;

export default MassivePurchaseRequestSchema;
