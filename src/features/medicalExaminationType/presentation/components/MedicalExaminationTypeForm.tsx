import { type MedicalExaminationTypeFormEntity } from '../../domain';
import { type FC, useMemo } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { Form, Input, Select } from 'antd';
import { medicalExaminationTypesTranslation } from '@core/helpers';

enum FormFields {
  name = 'name',
  type = 'type',
}

export interface IMedicalExaminationTypeFormValues {
  [FormFields.name]: string;
  [FormFields.type]: string;
}

interface IMedicalExaminationTypeFormProps {
  medicalExaminationType?: MedicalExaminationTypeFormEntity | null;
  loading?: boolean;
  onSubmitData: (values: IMedicalExaminationTypeFormValues) => void;
}

export const MedicalExaminationTypeForm: FC<IMedicalExaminationTypeFormProps> = ({
  onSubmitData,
  medicalExaminationType,
  loading,
}) => {
  const [form] = Form.useForm();

  const medicalExaminationTypeOptions = useMemo(
    () => Object.entries(medicalExaminationTypesTranslation).map(value => ({ label: value[1], value: value[0] })),
    [],
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
          .then((values: IMedicalExaminationTypeFormValues) => {
            onSubmitData(values);
          })
          .catch(() => {});
      }}
    >
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-6">
          <Form.Item
            required
            label="Nombre"
            rules={[{ required: true, message: 'Debe ingresar el nombre' }]}
            initialValue={medicalExaminationType?.name}
            name={FormFields.name}
          >
            <Input placeholder="Ingrese el nombre..." disabled={loading} />
          </Form.Item>
        </Column>

        <Column colSpan="col-span-6">
          <Form.Item
            label="Tipo de examen médico"
            name={FormFields.type}
            rules={[{ required: true, message: 'El tipo es requerido' }]}
            initialValue={medicalExaminationType?.type}
          >
            <Select
              placeholder="Seleccione el tipo"
              allowClear
              showSearch
              optionFilterProp="label"
              options={medicalExaminationTypeOptions}
              disabled={loading}
            />
          </Form.Item>
        </Column>
      </Row>

      <div className="flex justify-end mt-10">
        <div className="flex justify-end mr-5">
          <Link
            to="/tipos-de-examenes-medicos"
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
