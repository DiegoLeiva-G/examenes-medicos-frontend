import { z } from 'zod';

export const CitizenRequestInternalSenderLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'citizenRequestInternalSenderId',
  'userId',
  'createdAt',
]);

export default CitizenRequestInternalSenderLogScalarFieldEnumSchema;
