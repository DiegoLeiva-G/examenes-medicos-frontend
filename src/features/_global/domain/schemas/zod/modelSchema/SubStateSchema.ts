import { z } from 'zod';

/////////////////////////////////////////
// SUB STATE SCHEMA
/////////////////////////////////////////

export const SubStateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  stateId: z.string(),
});

export type SubState = z.infer<typeof SubStateSchema>;

/////////////////////////////////////////
// SUB STATE PARTIAL SCHEMA
/////////////////////////////////////////

export const SubStatePartialSchema = SubStateSchema.partial();

export type SubStatePartial = z.infer<typeof SubStatePartialSchema>;

/////////////////////////////////////////
// SUB STATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SubStateOptionalDefaultsSchema = SubStateSchema.merge(
  z.object({
    id: z.string().cuid().optional(),
  }),
);

export type SubStateOptionalDefaults = z.infer<typeof SubStateOptionalDefaultsSchema>;

export default SubStateSchema;
