import { type FundingSourceSummaryEntity, FundingSourceType } from '../../domain';
import { type FC, useEffect, useMemo } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { enumToObjectArray } from '@core/helpers';
import { Form, Input, Select, Switch } from 'antd';

enum FormFields {
  name = 'name',
  type = 'type',
  enabled = 'enabled',
}

export interface IFundingSourceFormValues {
  [FormFields.name]: string;
  [FormFields.type]: FundingSourceType;
  [FormFields.enabled]: boolean;
}

interface IMeasureUnitFormProps {
  fundingSource?: FundingSourceSummaryEntity | null;
  loading?: boolean;
  onSubmitData: (values: IFundingSourceFormValues) => void;
}

export const FundingSourceForm: FC<IMeasureUnitFormProps> = ({ onSubmitData, fundingSource, loading }) => {
  const [form] = Form.useForm();

  const fundingSourceTypeOptions = useMemo(() => {
    return enumToObjectArray(FundingSourceType).map(value => ({
      label: value.name === FundingSourceType.Internal ? 'Interno' : 'Externo',
      value: value.id,
    }));
  }, []);

  useEffect(() => {
    if (fundingSource) {
      form.setFieldsValue({
        [FormFields.name]: fundingSource.name,
        [FormFields.type]: fundingSource.type,
        [FormFields.enabled]: fundingSource.enabled,
      });
    }
  }, [fundingSource, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      method="post"
      onSubmitCapture={event => {
        event.preventDefault();
        form
          .validateFields()
          .then((values: IFundingSourceFormValues) => {
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
            initialValue={fundingSource?.name}
            name={FormFields.name}
          >
            <Input placeholder="Ingrese el nombre..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-6">
          <Form.Item label="Tipo" initialValue={fundingSource?.type} name={FormFields.type}>
            <Select
              showSearch
              allowClear
              placeholder="Seleccione..."
              options={fundingSourceTypeOptions}
              disabled={loading}
              optionFilterProp="label"
            />
          </Form.Item>
        </Column>
      </Row>
      <Row>
        <Column>
          <Form.Item
            label="Habilitado"
            name="enabled"
            valuePropName="checked"
            initialValue={{
              enabled: fundingSource?.enabled ?? false,
            }}
          >
            <Switch disabled={loading} />
          </Form.Item>
        </Column>
      </Row>
      <div className="flex justify-end mt-10">
        <div className="flex justify-end mr-5">
          <Link
            to="/app/fuentes-de-financiamiento"
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
