import { z } from 'zod';

export const InvestmentInitiativeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'directorateResponsibleCodeReference',
  'directorateCoResponsibleCodeReference',
  'startDate',
  'endDate',
  'legalNorms',
  'enabled',
  'archived',
  'createdAt',
  'updatedAt',
]);

export default InvestmentInitiativeScalarFieldEnumSchema;
