import { type MedicalPatientFormEntity } from '../../domain';
import { type FC } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';

enum FormFields {
  rut = 'rut',
  name = 'name',
  lastName = 'lastName',
  middleName = 'middleName',
  secondaryLastName = 'secondaryLastName',
  years = 'years',
  fur = 'fur',
}

export interface IMedicalPatientFormValues {
  [FormFields.rut]: string
  [FormFields.name]: string;
  [FormFields.lastName]: string;
  [FormFields.middleName]: string;
  [FormFields.secondaryLastName]: string;
  [FormFields.years]: string;
  [FormFields.fur]: Date;
}

interface IMedicalPatientFormProps {
  medicalPatient?: MedicalPatientFormEntity | null;
  loading?: boolean;
  onSubmitData: (values: IMedicalPatientFormValues) => void;
}

export const MedicalPatientForm: FC<IMedicalPatientFormProps> = ({ onSubmitData, medicalPatient, loading }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      method="post"
      onSubmitCapture={event => {
        event.preventDefault();
        form
          .validateFields()
          .then((values: IMedicalPatientFormValues) => {
            onSubmitData(values);
          })
          .catch(() => {});
      }}
    >
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-4">
          <Form.Item
            label="Rut"
            initialValue={medicalPatient?.rut}
            name={FormFields.rut}
          >
            <Input placeholder="Ingrese el rut..." disabled={loading} />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-4">
          <Form.Item
            required
            label="Edad"
            rules={[{ required: true, message: 'Debe ingresar la edad' }]}
            initialValue={medicalPatient?.years}
            name={FormFields.years}
          >
            <Input placeholder="Ingrese la edad..." disabled={loading} />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-4">
          <Form.Item
            label="F.U.R."
            name={FormFields.fur}
            initialValue={medicalPatient?.fur ? dayjs(medicalPatient.fur) : undefined}
          >
            <DatePicker
              className="w-full"
              format="DD/MM/YYYY"
              placeholder="Seleccione la F.U.R."
              disabled={loading}
            />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-6">
          <Form.Item
            required
            label="Nombre"
            rules={[{ required: true, message: 'Debe ingresar el nombre' }]}
            initialValue={medicalPatient?.name}
            name={FormFields.name}
          >
            <Input placeholder="Ingrese el nombre..." disabled={loading} />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-6">
          <Form.Item
            label="Segundo nombre"
            initialValue={medicalPatient?.middleName}
            name={FormFields.middleName}
          >
            <Input placeholder="Ingrese el nombre..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-6">
          <Form.Item
            required
            label="Apellido"
            rules={[{ required: true, message: 'Debe ingresar el apellido' }]}
            initialValue={medicalPatient?.lastName}
            name={FormFields.lastName}
          >
            <Input placeholder="Ingrese el apellido..." disabled={loading} />
          </Form.Item>
        </Column>
        <Column colSpan="col-span-6">
          <Form.Item
            label="Segundo apellido"
            initialValue={medicalPatient?.secondaryLastName}
            name={FormFields.secondaryLastName}
          >
            <Input placeholder="Ingrese el apellido..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <div className="flex justify-end mt-10">
        <div className="flex justify-end mr-5">
          <Link
            to="/pacientes-medicos"
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
