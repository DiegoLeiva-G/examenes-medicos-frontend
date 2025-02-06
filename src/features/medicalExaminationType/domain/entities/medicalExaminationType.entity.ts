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
  ) {}
}

export class MedicalExaminationTypeGetByIdResponseEntity implements Pick<MedicalExaminationTypeEntity, 'id'> {
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
  ) {}
}

export class MedicalExaminationTypeCreateResponseEntity
  implements Omit<MedicalExaminationTypeEntity, 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
  ) {}
}

export class MedicalExaminationTypeUpdateResponseEntity
  implements Pick<MedicalExaminationTypeEntity, 'id' | 'name' | 'type'>
{
  constructor(
    public id: MedicalExaminationTypeEntity['id'],
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
  ) {}
}

export class MedicalExaminationTypeDeleteResponseEntity implements Pick<MedicalExaminationTypeEntity, 'id'> {
  constructor(public id: string) {}
}

export class MedicalExaminationTypeFormEntity implements Pick<MedicalExaminationTypeEntity, 'name' | 'type'> {
  constructor(
    public name: MedicalExaminationTypeEntity['name'],
    public type: MedicalExaminationTypeEntity['type'],
    public id?: MedicalExaminationTypeEntity['id'] | null,
  ) {}
}
