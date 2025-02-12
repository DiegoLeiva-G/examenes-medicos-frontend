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
    public observation2?: string | null,
    public dimension?: string | null,
    public dimension2?: string | null,
    public descriptionDimension?: string | null,
    public anexes?: string | null,
    public anexes2?: string | null,
    public descriptionAnexes?: string | null,
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
    public observation2?: MedicalExaminationTypeEntity['observation2'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public dimension2?: MedicalExaminationTypeEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationTypeEntity['descriptionDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public anexes2?: MedicalExaminationTypeEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationTypeEntity['descriptionAnexes'],
    public conclusion?: MedicalExaminationTypeEntity['conclusion'],
  ) {}
}

export class MedicalExaminationTypeGetByIdResponseEntity implements Pick<MedicalExaminationTypeEntity, 'id'> {
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public observation2?: MedicalExaminationTypeEntity['observation2'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public dimension2?: MedicalExaminationTypeEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationTypeEntity['descriptionDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public anexes2?: MedicalExaminationTypeEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationTypeEntity['descriptionAnexes'],
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
    public observation2?: MedicalExaminationTypeEntity['observation2'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public dimension2?: MedicalExaminationTypeEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationTypeEntity['descriptionDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public anexes2?: MedicalExaminationTypeEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationTypeEntity['descriptionAnexes'],
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
      | 'observation2'
      | 'dimension'
      | 'dimension2'
      | 'descriptionDimension'
      | 'anexes'
      | 'anexes2'
      | 'descriptionAnexes'
      | 'conclusion'
    >
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'],
    public observation2?: MedicalExaminationTypeEntity['observation2'],
    public dimension?: MedicalExaminationTypeEntity['dimension'],
    public dimension2?: MedicalExaminationTypeEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationTypeEntity['descriptionDimension'],
    public anexes?: MedicalExaminationTypeEntity['anexes'],
    public anexes2?: MedicalExaminationTypeEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationTypeEntity['descriptionAnexes'],
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
      | 'observation2'
      | 'dimension'
      | 'dimension2'
      | 'descriptionDimension'
      | 'anexes'
      | 'anexes2'
      | 'descriptionAnexes'
      | 'conclusion'
    >
{
  constructor(
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public observation?: MedicalExaminationTypeEntity['observation'] | null,
    public observation2?: MedicalExaminationTypeEntity['observation'] | null,
    public dimension?: MedicalExaminationTypeEntity['dimension'] | null,
    public dimension2?: MedicalExaminationTypeEntity['dimension'] | null,
    public descriptionDimension?: MedicalExaminationTypeEntity['descriptionDimension'] | null,
    public anexes?: MedicalExaminationTypeEntity['anexes'] | null,
    public anexes2?: MedicalExaminationTypeEntity['anexes2'] | null,
    public descriptionAnexes?: MedicalExaminationTypeEntity['descriptionAnexes'] | null,
    public conclusion?: MedicalExaminationTypeEntity['conclusion'] | null,
    public id?: MedicalExaminationTypeEntity['id'] | null,
  ) {}
}
