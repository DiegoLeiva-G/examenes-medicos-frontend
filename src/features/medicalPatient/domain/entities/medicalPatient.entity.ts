import { type MedicalExaminationEntity } from '../../../medicalExamination';

export class MedicalPatientEntity {
  constructor(
    public id: string,
    public rut: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public years?: string | null,
    public fur?: string | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public deleted?: boolean | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
  ) {}
}

export class MedicalPatientGetAllResponseEntity implements Omit<MedicalPatientEntity, 'deleted' | 'updatedAt'> {
  constructor(
    public id: string,
    public rut: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public years?: string | null,
    public fur?: string | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public createdAt?: Date | null,
  ) {}
}

export class MedicalPatientGetByIdResponseEntity implements Pick<MedicalPatientEntity, 'id'> {
  constructor(
    public id: string,
    public rut: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public years?: string | null,
    public fur?: string | null,
    public medicalExamination?: MedicalExaminationEntity[] | null,
    public createdAt?: Date | null,
  ) {}
}

export class MedicalPatientCreateResponseEntity
  implements Omit<MedicalPatientEntity, 'medicalExamination' | 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public rut: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public years?: string | null,
    public fur?: string | null,
  ) {}
}

export class MedicalPatientUpdateResponseEntity
  implements Pick<MedicalPatientEntity, 'id' | 'rut' | 'name' | 'middleName' | 'lastName' | 'secondaryLastName'| 'years' | 'fur'>
{
  constructor(
    public id: string,
    public rut: string,
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public years?: string | null,
    public fur?: string | null,
  ) {}
}

export class MedicalPatientDeleteResponseEntity implements Pick<MedicalPatientEntity, 'id'> {
  constructor(public id: string) {}
}

export class MedicalPatientFormEntity implements Pick<MedicalPatientEntity, 'name' | 'lastName'> {
  constructor(
    public name: string,
    public lastName: string,
    public middleName?: string | null,
    public secondaryLastName?: string | null,
    public rut?: string | null,
    public years?: string | null,
    public fur?: string | null,
    public id?: string | null,
  ) {}
}
