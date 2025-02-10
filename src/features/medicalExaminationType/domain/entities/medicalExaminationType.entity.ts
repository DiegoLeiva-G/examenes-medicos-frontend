export enum MedicalExaminationType {
  'Ultrasound' = 'Ultrasound',
  'Ray' = 'Ray',
  'Resonance' = 'Resonance',
}

export class MedicalExaminationTypeEntity {
  constructor(
    public id: string,
    public name: string,
    public type: MedicalExaminationType,
    public observation?: string | null,
    public dimension?: string | null,
    public measures?: string | null,
    public diagnosticDimension?: string | null,
    public anexes?: string | null,
    public diagnosticAnexes?: string | null,
    public conclusion?: string | null,
    public deleted?: boolean | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
  ) {}
}

export class MedicalExaminationTypeGetAllResponseEntity
  implements Omit<MedicalExaminationTypeEntity, 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public measures?: MedicalExaminationTypeEntity['measures'],
    public diagnosticDimension?: MedicalExaminationTypeEntity['diagnosticDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public diagnosticAnexes?: MedicalExaminationTypeEntity['diagnosticAnexes'],
    public conclusion?: MedicalExaminationTypeEntity['conclusion'],
  ) {}
}

export class MedicalExaminationTypeGetByIdResponseEntity implements Pick<MedicalExaminationTypeEntity, 'id'> {
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public measures?: MedicalExaminationTypeEntity['measures'],
    public diagnosticDimension?: MedicalExaminationTypeEntity['diagnosticDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public diagnosticAnexes?: MedicalExaminationTypeEntity['diagnosticAnexes'],
    public conclusion?: MedicalExaminationTypeEntity['conclusion'],
  ) {}
}

export class MedicalExaminationTypeCreateResponseEntity
  implements Omit<MedicalExaminationTypeEntity, 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public measures?: MedicalExaminationTypeEntity['measures'],
    public diagnosticDimension?: MedicalExaminationTypeEntity['diagnosticDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public diagnosticAnexes?: MedicalExaminationTypeEntity['diagnosticAnexes'],
    public conclusion?: MedicalExaminationTypeEntity['conclusion'],
  ) {}
}

export class MedicalExaminationTypeUpdateResponseEntity
  implements
    Pick<
      MedicalExaminationTypeEntity,
      | 'id'
      | 'name'
      | 'type'
      | 'observation'
      | 'dimension'
      | 'measures'
      | 'diagnosticDimension'
      | 'anexes'
      | 'diagnosticAnexes'
      | 'conclusion'
    >
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public measures?: MedicalExaminationTypeEntity['measures'],
    public diagnosticDimension?: MedicalExaminationTypeEntity['diagnosticDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public diagnosticAnexes?: MedicalExaminationTypeEntity['diagnosticAnexes'],
    public conclusion?: MedicalExaminationTypeEntity['conclusion'],
  ) {}
}

export class MedicalExaminationTypeDeleteResponseEntity implements Pick<MedicalExaminationTypeEntity, 'id'> {
  constructor(public id: string) {}
}

export class MedicalExaminationTypeFormEntity
  implements
    Pick<
      MedicalExaminationTypeEntity,
      | 'name'
      | 'type'
      | 'observation'
      | 'dimension'
      | 'measures'
      | 'diagnosticDimension'
      | 'anexes'
      | 'diagnosticAnexes'
      | 'conclusion'
    >
{
  constructor(
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'] | null,
    public dimension?: MedicalExaminationTypeEntity['dimension'] | null,
    public measures?: MedicalExaminationTypeEntity['measures'] | null,
    public diagnosticDimension?: MedicalExaminationTypeEntity['diagnosticDimension'] | null,
    public anexes?: MedicalExaminationTypeEntity['anexes'] | null,
    public diagnosticAnexes?: MedicalExaminationTypeEntity['diagnosticAnexes'] | null,
    public conclusion?: MedicalExaminationTypeEntity['conclusion'] | null,
    public id?: MedicalExaminationTypeEntity['id'] | null,
  ) {}
}
