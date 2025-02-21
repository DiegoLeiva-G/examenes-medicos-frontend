import { type FC, useCallback, useState } from 'react';
import { DatePicker, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '@core/contexts';
import { Column, Row } from '../../../_global';
import { createMedicalPatient } from '../../../medicalPatient';

enum FormFields {
  rut = 'rut',
  name = 'name',
  lastName = 'lastName',
  middleName = 'middleName',
  secondaryLastName = 'secondaryLastName',
  age = 'age',
  fur = 'fur',
}

export interface IMedicalPatientModalFormValues {
  [FormFields.rut]: string;
  [FormFields.name]: string;
  [FormFields.lastName]: string;
  [FormFields.middleName]: string;
  [FormFields.secondaryLastName]: string;
  [FormFields.age]: string;
  [FormFields.fur]: Date;
}

export const CreateMedicalPatientModalPage: FC = () => {
  const { setNotification } = useNotification();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    (formValues: IMedicalPatientModalFormValues) => {
      setLoading(true);

      const formattedFur = formValues.fur ? formValues.fur.toISOString() : null;

      createMedicalPatient
        .execute({ ...formValues, fur: formattedFur })
        .then(response => {
          setLoading(false);
          const titleNotification = 'Creación de paciente médico';

          if (response.error?.message) {
            setNotification({
              title: titleNotification,
              type: 'error',
              message: response.error.message,
            });

            return;
          }

          if (response.data?.id) {
            setNotification({
              title: titleNotification,
              type: 'success',
              message: 'Se ha creado correctamente el paciente médico!',
            });

            navigate('/examenes-medicos/crear', { state: { newPatientId: response.data.id } });
          }
        })
        .catch(() => {
          setLoading(false);
          setNotification({
            title: 'Creación de paciente médico',
            type: 'error',
            message: 'No se pudo crear el paciente médico.',
          });
        });
    },
    [navigate, setNotification],
  );

  const validateRut = (_: any, value: string) => {
    if (!value) return Promise.resolve();

    const rutRegex = /^[0-9]{7,8}-[0-9kK]$/;
    if (rutRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('El RUT debe tener el formato 11111111-1 o 11111111-K'));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9kK-]/g, '');
    form.setFieldsValue({ [FormFields.rut]: sanitizedValue });
  };

  return (
    <Modal
      title={`Crear paciente`}
      open
      onCancel={() => navigate(-1)}
      okText="Aceptar"
      cancelText="Cancelar"
      confirmLoading={loading}
      onOk={() => form.submit()}
    >
      <p className="mb-4">{`Ingresa los datos del paciente:`}</p>
      <Form form={form} layout="vertical" onFinish={(values: IMedicalPatientModalFormValues) => handleOnSubmit(values)}>
        <Row spacingX="sm:gap-x-6">
          <Column colSpan="col-span-4">
            <Form.Item
              label="Rut"
              name={FormFields.rut}
              rules={[
                {
                  validator: validateRut,
                },
              ]}
            >
              <Input placeholder="Ingrese el rut..." disabled={loading} maxLength={10} onChange={handleInputChange} />
            </Form.Item>
          </Column>

          <Column colSpan="col-span-4">
            <Form.Item label="Edad" name={FormFields.age}>
              <Input placeholder="Ingrese la edad..." disabled={loading} />
            </Form.Item>
          </Column>

          <Column colSpan="col-span-4">
            <Form.Item label="F.U.R." name={FormFields.fur}>
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
              name={FormFields.name}
            >
              <Input placeholder="Ingrese el nombre..." disabled={loading} />
            </Form.Item>
          </Column>

          <Column colSpan="col-span-6">
            <Form.Item label="Segundo nombre" name={FormFields.middleName}>
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
              name={FormFields.lastName}
            >
              <Input placeholder="Ingrese el apellido..." disabled={loading} />
            </Form.Item>
          </Column>
          <Column colSpan="col-span-6">
            <Form.Item label="Segundo apellido" name={FormFields.secondaryLastName}>
              <Input placeholder="Ingrese el apellido..." disabled={loading} />
            </Form.Item>
          </Column>
        </Row>
      </Form>
    </Modal>
  );
};
