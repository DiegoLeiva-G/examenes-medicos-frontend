import { type MedicalExaminationGetAllResponseEntity } from '../../domain';
import { type FC, useMemo, useRef, useState } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { DatePicker, Form, Select } from 'antd';
import { type MedicalPatientEntity } from '../../../medicalPatient';
import { type MedicalExaminationTypeEntity } from '../../../medicalExaminationType';
import { type DoctorEntity } from '../../../doctor';
import { medicalExaminationTypesTranslation } from '@core/helpers';
import dayjs from 'dayjs';
import { Editor } from '@tinymce/tinymce-react';

enum FormFields {
  dateExam = 'dateExam',
  content = 'content',
  medicalPatientId = 'medicalPatientId',
  medicalExaminationTypeId = 'medicalExaminationTypeId',
  doctorId = 'doctorId',
}

export interface IMedicalExaminationFormValues {
  [FormFields.dateExam]: Date;
  [FormFields.content]: string;
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
  const editorRef = useRef(null);
  const [selectedType, setSelectedType] = useState<MedicalExaminationTypeEntity | null>(null);

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

  const handleTypeChange = (value: string) => {
    const selected = medicalExaminationTypes.find((type) => type.id === value);
    if (selected) {
      setSelectedType(selected);
      const content = `
        <h3>Observación:</h3>
        <p>${selected.observation || ''}</p>
        <h3>Dimensión:</h3>
        <p>${selected.dimension || ''}</p>
        <h3>Medidas:</h3>
        <p>${selected.measures || ''}</p>
        <h3>Diagnóstico de Dimensión:</h3>
        <p>${selected.diagnosticDimension || ''}</p>
        <h3>Anexos:</h3>
        <p>${selected.anexes || ''}</p>
        <h3>Diagnóstico de Anexos:</h3>
        <p>${selected.diagnosticAnexes || ''}</p>
        <h3>Conclusión:</h3>
        <p>${selected.conclusion || ''}</p>
      `;
      if (editorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        editorRef.current.setContent(content); // Actualizar el contenido del editor
      }
    } else {
      setSelectedType(null); // Limpiar el estado si no hay selección
      if (editorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        editorRef.current.setContent(''); // Limpiar el contenido del editor
      }
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      method="post"
      onSubmitCapture={(event) => {
        event.preventDefault();
        form
          .validateFields()
          .then((values: IMedicalExaminationFormValues) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onSubmitData({ ...values, content: editorRef.current?.getContent() || '' });
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
              onChange={handleTypeChange}
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
          <Form.Item label="Contenido">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, editor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                editorRef.current = editor;
              }}
              initialValue={medicalExamination?.content || ''}
              init={{
                menubar: false,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'code',
                  'help',
                  'wordcount',
                  'autoresize',
                ],
                toolbar:
                  'undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl',
                resize: true,
                // eslint-disable-next-line camelcase
                autoresize_min_height: 200,
                // eslint-disable-next-line camelcase
                autoresize_max_height: 600,
                // eslint-disable-next-line camelcase
                autoresize_bottom_margin: 10,
              }}
            />
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
