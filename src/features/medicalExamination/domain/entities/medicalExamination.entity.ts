import { type MedicalExaminationType, type MedicalExaminationTypeEntity } from '../../../medicalExaminationType';
import { type DoctorEntity } from '../../../doctor';
import { type MedicalPatientEntity } from '../../../medicalPatient';

export class MedicalExaminationEntity {
  constructor(
    public id: string,
    public dateExam: string,
    public observation?: string | null,
    public observation2?: string | null,
    public dimension?: string | null,
    public dimension2?: string | null,
    public descriptionDimension?: string | null,
    public anexes?: string | null,
    public anexes2?: string | null,
    public descriptionAnexes?: string | null,
    public conclusion?: string | null,
    public medicalPatientId?: string | null,
    public medicalExaminationTypeId?: string | null,
    public doctorId?: string | null,
    public deleted?: boolean | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
  ) {}
}

export class MedicalExaminationGetAllResponseEntity implements Pick<MedicalExaminationEntity, 'id'> {
  constructor(
    public id: string,
    public dateExam: string,
    public medicalPatient: {
      id: MedicalPatientEntity['id'];
      name: MedicalPatientEntity['name'];
      lastName: MedicalPatientEntity['lastName'];
      rut?: MedicalPatientEntity['rut'];
      middleName?: MedicalPatientEntity['middleName'];
      secondaryLastName?: MedicalPatientEntity['secondaryLastName'];
    },
    public doctor: {
      id: DoctorEntity['id'];
      name: DoctorEntity['name'];
      lastName: DoctorEntity['lastName'];
      nameProfession: DoctorEntity['nameProfession'];
      specialization: DoctorEntity['specialization'];
      middleName?: DoctorEntity['middleName'];
      secondaryLastName?: DoctorEntity['secondaryLastName'];
    },
    public medicalExaminationType: {
      id: MedicalExaminationTypeEntity['id'];
      name: MedicalExaminationTypeEntity['name'];
      type: MedicalExaminationType;
    },
    public observation?: string | null,
    public observation2?: string | null,
    public dimension?: string | null,
    public dimension2?: string | null,
    public descriptionDimension?: string | null,
    public anexes?: string | null,
    public anexes2?: string | null,
    public descriptionAnexes?: string | null,
    public conclusion?: string | null,
    public createdAt?: Date | null,
  ) {}
}

export class MedicalExaminationGetByIdResponseEntity implements Pick<MedicalExaminationEntity, 'id'> {
  constructor(
    public id: string,
    public dateExam: string,
    public medicalPatient: {
      id: MedicalPatientEntity['id'];
      name: MedicalPatientEntity['name'];
      lastName: MedicalPatientEntity['lastName'];
      rut?: MedicalPatientEntity['rut'];
      middleName?: MedicalPatientEntity['middleName'];
      secondaryLastName?: MedicalPatientEntity['secondaryLastName'];
    },
    public doctor: {
      id: DoctorEntity['id'];
      name: DoctorEntity['name'];
      lastName: DoctorEntity['lastName'];
      nameProfession: DoctorEntity['nameProfession'];
      specialization: DoctorEntity['specialization'];
      middleName?: DoctorEntity['middleName'];
      secondaryLastName?: DoctorEntity['secondaryLastName'];
    },
    public medicalExaminationType: {
      id: MedicalExaminationTypeEntity['id'];
      name: MedicalExaminationTypeEntity['name'];
      type: MedicalExaminationType;
    },
    public observation?: string | null,
    public observation2?: string | null,
    public dimension?: string | null,
    public dimension2?: string | null,
    public descriptionDimension?: string | null,
    public anexes?: string | null,
    public anexes2?: string | null,
    public descriptionAnexes?: string | null,
    public conclusion?: string | null,
    public createdAt?: Date | null,
  ) {}
}

export class MedicalExaminationCreateResponseEntity implements Omit<MedicalExaminationEntity, 'deleted' | 'updatedAt'> {
  constructor(
    public id: MedicalExaminationEntity['id'],
    public dateExam: MedicalExaminationEntity['dateExam'],
    public observation?: MedicalExaminationEntity['observation'],
    public observation2?: MedicalExaminationEntity['observation2'],
    public dimension?: MedicalExaminationEntity['dimension'],
    public dimension2?: MedicalExaminationEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationEntity['descriptionDimension'],
    public anexes?: MedicalExaminationEntity['anexes'],
    public anexes2?: MedicalExaminationEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationEntity['descriptionAnexes'],
    public conclusion?: MedicalExaminationEntity['conclusion'],
    public medicalPatientId?: MedicalExaminationEntity['medicalPatientId'],
    public medicalExaminationTypeId?: MedicalExaminationEntity['medicalExaminationTypeId'],
    public doctorId?: MedicalExaminationEntity['doctorId'],
    public createdAt?: MedicalExaminationEntity['createdAt'],
  ) {}
}

export class MedicalExaminationUpdateResponseEntity
  implements Omit<MedicalExaminationEntity, 'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: MedicalExaminationEntity['id'],
    public dateExam: MedicalExaminationEntity['dateExam'],
    public observation?: MedicalExaminationEntity['observation'],
    public observation2?: MedicalExaminationEntity['observation2'],
    public dimension?: MedicalExaminationEntity['dimension'],
    public dimension2?: MedicalExaminationEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationEntity['descriptionDimension'],
    public anexes?: MedicalExaminationEntity['anexes'],
    public anexes2?: MedicalExaminationEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationEntity['descriptionAnexes'],
    public conclusion?: MedicalExaminationEntity['conclusion'],
    public medicalPatientId?: MedicalExaminationEntity['medicalPatientId'],
    public medicalExaminationTypeId?: MedicalExaminationEntity['medicalExaminationTypeId'],
    public doctorId?: MedicalExaminationEntity['doctorId'],
  ) {}
}

export class MedicalExaminationDeleteResponseEntity implements Pick<MedicalExaminationEntity, 'id'> {
  constructor(public id: string) {}
}

export class MedicalExaminationFormEntity
  implements
    Pick<
      MedicalExaminationEntity,
      | 'dateExam'
      | 'observation'
      | 'observation2'
      | 'dimension'
      | 'dimension2'
      | 'descriptionDimension'
      | 'anexes'
      | 'anexes2'
      | 'descriptionAnexes'
      | 'conclusion'
      | 'medicalPatientId'
      | 'medicalExaminationTypeId'
      | 'doctorId'
    >
{
  constructor(
    public dateExam: MedicalExaminationEntity['dateExam'],
    public observation?: MedicalExaminationEntity['observation'],
    public observation2?: MedicalExaminationEntity['observation2'],
    public dimension?: MedicalExaminationEntity['dimension'],
    public dimension2?: MedicalExaminationEntity['dimension2'],
    public descriptionDimension?: MedicalExaminationEntity['descriptionDimension'],
    public anexes?: MedicalExaminationEntity['anexes'],
    public anexes2?: MedicalExaminationEntity['anexes2'],
    public descriptionAnexes?: MedicalExaminationEntity['descriptionAnexes'],
    public conclusion?: MedicalExaminationEntity['conclusion'],
    public medicalPatientId?: MedicalExaminationEntity['medicalPatientId'],
    public medicalExaminationTypeId?: MedicalExaminationEntity['medicalExaminationTypeId'],
    public doctorId?: MedicalExaminationEntity['doctorId'],
    public id?: MedicalExaminationEntity['id'] | null,
  ) {}
}
