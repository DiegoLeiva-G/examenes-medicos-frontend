import { MedicalExaminationEntity } from '../../../medicalExamination';

export class DoctorEntity {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public deleted?: boolean | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
  ) {}
}

export class DoctorGetAllResponseEntity implements Omit<DoctorEntity,  'deleted' | 'updatedAt'> {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public createdAt?: Date | null,
  ) {}
}

export class DoctorGetByIdResponseEntity implements Pick<DoctorEntity, 'id'> {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public createdAt?: Date | null,
  ) {}
}

export class DoctorCreateResponseEntity
  implements Omit<DoctorEntity, 'medicalExamination' | 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
  ) {}
}

export class DoctorUpdateResponseEntity
  implements
    Pick<
      DoctorEntity,
      'id' | 'name' | 'middleName' | 'lastName' | 'secondaryLastName' | 'nameProfession' | 'specialization'
    >
{
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
  ) {}
}

export class DoctorDeleteResponseEntity implements Pick<DoctorEntity, 'id'> {
  constructor(public id: string) {}
}

export class DoctorFormEntity implements Pick<DoctorEntity, 'name' | 'lastName'> {
  constructor(
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public nameProfession?: string[] | null,
    public specialization?: string[] | null,
    public id?: string | null,
  ) {}
}
