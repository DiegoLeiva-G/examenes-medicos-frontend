import { z } from 'zod';

export const InvestmentInitiativeOriginSchema = z.enum([
  'Pladeco',
  'CommunityGovernmentProgram',
  'ManagementAreaObjetive',
  'CitizenRequest',
]);

export type InvestmentInitiativeOriginType = `${z.infer<typeof InvestmentInitiativeOriginSchema>}`;

export default InvestmentInitiativeOriginSchema;
