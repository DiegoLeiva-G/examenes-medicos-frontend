import { z } from 'zod';

export const InvestmentInitiativeLogScalarFieldEnumSchema = z.enum([
  'id',
  'action',
  'observations',
  'ip',
  'investmentInitiativeId',
  'userId',
  'createdAt',
]);

export default InvestmentInitiativeLogScalarFieldEnumSchema;
