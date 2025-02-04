import { z } from 'zod';

export const StudyLevelSchema = z.enum([
  'IncompleteBasic',
  'CompleteBasic',
  'IncompleteMiddle',
  'CompleteMiddle',
  'IncompleteSeniorTechnician',
  'CompleteSeniorTechnician',
  'IncompleteSeniorProfessional',
  'CompleteSeniorProfessional',
]);

export type StudyLevelType = `${z.infer<typeof StudyLevelSchema>}`;

export default StudyLevelSchema;
