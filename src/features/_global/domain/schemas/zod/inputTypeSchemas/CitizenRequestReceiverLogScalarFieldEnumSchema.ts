import { z } from 'zod';

export const CitizenRequestReceiverLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'citizenRequestReceiverId',
  'userId',
  'createdAt',
]);

export default CitizenRequestReceiverLogScalarFieldEnumSchema;
