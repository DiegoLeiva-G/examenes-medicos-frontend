import { type MedicalExaminationGetAllResponseEntity } from '../../domain';
import { type FC, useMemo } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { DatePicker, Form, Input, Select } from 'antd';
import { type MedicalPatientEntity } from '../../../medicalPatient';
import { type MedicalExaminationTypeEntity } from '../../../medicalExaminationType';
import { type DoctorEntity } from '../../../doctor';
import { medicalExaminationTypesTranslation } from '@core/helpers';
import dayjs from 'dayjs';

enum FormFields {
  dateExam = 'dateExam',
  observation = 'observation',
  anexes = 'anexes',
  conclusion = 'conclusion',
  titleDimension = 'titleDimension',
  nameDimension = 'nameDimension',
  measureDimension = 'measureDimension',
  descriptionDimension = 'descriptionDimension',
  medicalPatientId = 'medicalPatientId',
  medicalExaminationTypeId = 'medicalExaminationTypeId',
  doctorId = 'doctorId',
}

export interface IMedicalExaminationFormValues {
  [FormFields.dateExam]: Date;
  [FormFields.observation]: string;
  [FormFields.anexes]: string;
  [FormFields.conclusion]: string;
  [FormFields.titleDimension]: string;
  [FormFields.nameDimension]: string;
  [FormFields.measureDimension]: string;
  [FormFields.descriptionDimension]: string;
  [FormFields.medicalPatientId]: string;
  [FormFields.medicalExaminationTypeId]: string;
  [FormFields.doctorId]: string;
}

interface IMedicalExaminationFormProps {
  medicalExamination?: MedicalExaminationGetAllResponseEntity | null;
  loading?: boolean;
  onSubmitData: (values: IMedicalExaminationFormValues) => void;
  medicalPatients: MedicalPatientEntity[];
  medicalExaminationTypes: MedicalExaminationTypeEntity[];
  doctors: DoctorEntity[];
}

export const MedicalExaminationForm: FC<IMedicalExaminationFormProps> = ({
  onSubmitData,
  medicalExamination,
  loading,
  medicalPatients,
  medicalExaminationTypes,
  doctors,
}) => {
  const [form] = Form.useForm();

  const medicalPatientOptions = useMemo(
    () =>
      medicalPatients.map(medicalPatient => ({
        label: `${medicalPatient.name} ${medicalPatient.lastName}`,
        value: medicalPatient.id,
      })),
    [medicalPatients],
  );

  const medicalExaminationTypeOptions = useMemo(
    () =>
      medicalExaminationTypes.map(medicalExaminationType => ({
        label: `${medicalExaminationTypesTranslation[medicalExaminationType.type]} ${medicalExaminationType.name}`,
        value: medicalExaminationType.id,
      })),
    [medicalExaminationTypes],
  );

  const doctorOptions = useMemo(
    () =>
      doctors.map(doctor => ({
        label: `${doctor.name} ${doctor.lastName}`,
        value: doctor.id,
      })),
    [doctors],
  );

  return (
    <Form
      form={form}
      layout="vertical"
      method="post"
      onSubmitCapture={event => {
        event.preventDefault();
        form
          .validateFields()
          .then((values: IMedicalExaminationFormValues) => {
            onSubmitData(values);
          })
          .catch(() => {});
      }}
    >
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-3">
          <Form.Item
            label="Tipo de examen"
            name="medicalExaminationTypeId"
            rules={[{ required: true, message: 'El tipo de examen es requerido' }]}
            initialValue={medicalExamination?.medicalExaminationType.id}
          >
            <Select
              placeholder="Seleccione el tipo de examen médico"
              allowClear
              showSearch
              optionFilterProp="label"
              options={medicalExaminationTypeOptions}
            />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-3">
          <Form.Item
            label="Paciente médico"
            name="medicalPatientId"
            rules={[{ required: true, message: 'El paciente es requerido' }]}
            initialValue={medicalExamination?.medicalPatient.id}
          >
            <Select
              placeholder="Seleccione el paciente médico"
              allowClear
              showSearch
              optionFilterProp="label"
              options={medicalPatientOptions}
            />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-3">
          <Form.Item
            label="Médico"
            name="doctorId"
            rules={[{ required: true, message: 'El médico es requerido' }]}
            initialValue={medicalExamination?.doctor.id}
          >
            <Select
              placeholder="Seleccione el tipo de examen médico"
              allowClear
              showSearch
              optionFilterProp="label"
              options={doctorOptions}
            />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-3">
          <Form.Item
            label="Fecha del Examen"
            name={FormFields.dateExam}
            rules={[{ required: true, message: 'La fecha del examen es requerida' }]}
            initialValue={medicalExamination?.dateExam ? dayjs(medicalExamination.dateExam) : undefined}
          >
            <DatePicker
              className="w-full"
              format="DD/MM/YYYY"
              placeholder="Seleccione la fecha del examen"
              disabled={loading}
            />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            required
            label="Observaciones"
            rules={[{ required: true, message: 'Debe ingresar las observaciones' }]}
            initialValue={medicalExamination?.observation}
            name={FormFields.observation}
          >
            <Input.TextArea placeholder="Ingrese las observaciones..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Anexos" initialValue={medicalExamination?.anexes} name={FormFields.anexes}>
            <Input.TextArea placeholder="Ingrese el/los anexo(s)..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            label="Dimensión"
            initialValue={medicalExamination?.titleDimension}
            name={FormFields.titleDimension}
          >
            <Input placeholder="Ingrese el nombre de la dimensión..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            label="Descripción de la dimensión"
            initialValue={medicalExamination?.nameDimension}
            name={FormFields.nameDimension}
          >
            <Input.TextArea placeholder="Ingrese la descripción de la dimensión..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            label="Medidas"
            initialValue={medicalExamination?.measureDimension}
            name={FormFields.measureDimension}
          >
            <Input.TextArea placeholder="Ingrese las medidas de la dimensión..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            label="Descripción de la Dimensión"
            initialValue={medicalExamination?.descriptionDimension}
            name={FormFields.descriptionDimension}
          >
            <Input.TextArea placeholder="Ingrese la descripción de la dimensión..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            required
            label="Conclusión"
            rules={[{ required: true, message: 'Debe ingresar la conclusión' }]}
            initialValue={medicalExamination?.conclusion}
            name={FormFields.conclusion}
          >
            <Input.TextArea placeholder="Ingrese la conclusión..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <div className="flex justify-end mt-10">
        <div className="flex justify-end mr-5">
          <Link
            to="/examenes-medicos"
            className="inline-flex items-center gap-x-1.5 rounded-md  px-2.5 py-1.5 text-sm font-semibold text-white
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Cancelar
            </button>
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center items-center gap-x-1.5 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
            loading
              ? 'disabled:cursor-not-allowed disabled:bg-primary-400 disabled:text-white-500 disabled:ring-primary-200'
              : ''
          }`}
        >
          {!loading ? (
            <RiSaveLine aria-hidden="true" className="-mr-0.5 h-5 w-5" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-transparent border-t-white animate-spin" />
          )}
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </Form>
  );
};
