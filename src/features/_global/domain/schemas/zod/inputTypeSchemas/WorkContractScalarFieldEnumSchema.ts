import { z } from 'zod';

export const WorkContractScalarFieldEnumSchema = z.enum(['id', 'type', 'employeeId']);

export default WorkContractScalarFieldEnumSchema;
