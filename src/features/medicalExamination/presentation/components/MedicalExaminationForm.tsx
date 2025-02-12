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
  observation = 'observation',
  observation2 = 'observation2',
  dimension = 'dimension',
  dimension2 = 'dimension2',
  descriptionDimension = 'descriptionDimension',
  anexes = 'anexes',
  anexes2 = 'anexes2',
  descriptionAnexes = 'descriptionAnexes',
  conclusion = 'conclusion',
  medicalPatientId = 'medicalPatientId',
  medicalExaminationTypeId = 'medicalExaminationTypeId',
  doctorId = 'doctorId',
}

export interface IMedicalExaminationFormValues {
  [FormFields.dateExam]: Date;
  [FormFields.observation]: string;
  [FormFields.observation2]: string;
  [FormFields.dimension]: string;
  [FormFields.dimension2]: string;
  [FormFields.descriptionDimension]: string;
  [FormFields.anexes]: string;
  [FormFields.anexes2]: string;
  [FormFields.descriptionAnexes]: string;
  [FormFields.conclusion]: string;
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
  const [selectedType, setSelectedType] = useState<MedicalExaminationTypeEntity | null>(null);

  console.log(selectedType)

  const observationEditorRef = useRef(null);
  const observation2EditorRef = useRef(null);
  const dimensionEditorRef = useRef(null);
  const dimension2EditorRef = useRef(null);
  const descriptionDimensionEditorRef = useRef(null);
  const anexesEditorRef = useRef(null);
  const anexes2EditorRef = useRef(null);
  const descriptionAnexesEditorRef = useRef(null);
  const conclusionEditorRef = useRef(null);

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

      // Actualizar los valores en los editores TinyMCE
      if (observationEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        observationEditorRef.current.setContent(selected.observation || '');
      }
      if (observation2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        observation2EditorRef.current.setContent(selected.observation2 || '');
      }
      if (dimensionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dimensionEditorRef.current.setContent(selected.dimension || '');
      }
      if (dimension2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dimension2EditorRef.current.setContent(selected.dimension2 || '');
      }
      if (descriptionDimensionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        descriptionDimensionEditorRef.current.setContent(selected.descriptionDimension || '');
      }
      if (anexesEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        anexesEditorRef.current.setContent(selected.anexes || '');
      }
      if (anexes2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        anexes2EditorRef.current.setContent(selected.anexes2 || '');
      }
      if (descriptionAnexesEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        descriptionAnexesEditorRef.current.setContent(selected.descriptionAnexes || '');
      }
      if (conclusionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        conclusionEditorRef.current.setContent(selected.conclusion || '');
      }
    } else {
      setSelectedType(null);

      // Limpiar los valores en los editores TinyMCE
      if (observationEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        observationEditorRef.current.setContent('');
      }
      if (observation2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        observation2EditorRef.current.setContent('');
      }
      if (dimensionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dimensionEditorRef.current.setContent('');
      }
      if (dimension2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dimension2EditorRef.current.setContent('');
      }
      if (descriptionDimensionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        descriptionDimensionEditorRef.current.setContent('');
      }
      if (anexesEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        anexesEditorRef.current.setContent('');
      }
      if (anexes2EditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        anexes2EditorRef.current.setContent('');
      }
      if (descriptionAnexesEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        descriptionAnexesEditorRef.current.setContent('');
      }
      if (conclusionEditorRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        conclusionEditorRef.current.setContent('');
      }
    }
  };

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
            onSubmitData({
              ...values,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              observation: observationEditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              observation2: observation2EditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              dimension: dimensionEditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              dimension2: dimension2EditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              descriptionDimension: descriptionDimensionEditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              anexes: anexesEditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              anexes2: anexes2EditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              descriptionAnexes: descriptionAnexesEditorRef.current?.getContent() || '',
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              conclusion: conclusionEditorRef.current?.getContent() || '',
            });
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

      {/* Observaciones  */}
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Observaciones">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, observationEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                observationEditorRef.current = observationEditor;
              }}
              initialValue={medicalExamination?.observation || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Segunda Observación">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, observation2Editor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                observation2EditorRef.current = observation2Editor;
              }}
              initialValue={medicalExamination?.observation2 || ''}
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

      {/* Dimensiones */}

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Dimensiones">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, dimensionEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                dimensionEditorRef.current = dimensionEditor;
              }}
              initialValue={medicalExamination?.dimension || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Segunda dimensión">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, dimension2Editor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                dimension2EditorRef.current = dimension2Editor;
              }}
              initialValue={medicalExamination?.dimension2 || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Descripción de dimensión">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, descriptionDimensionEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                descriptionDimensionEditorRef.current = descriptionDimensionEditor;
              }}
              initialValue={medicalExamination?.descriptionDimension || ''}
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

      {/* Anexos */}

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Anexos">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, anexesEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                anexesEditorRef.current = anexesEditor;
              }}
              initialValue={medicalExamination?.anexes || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Segundo anexo">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, anexes2Editor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                anexes2EditorRef.current = anexes2Editor;
              }}
              initialValue={medicalExamination?.anexes2 || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Descripción de anexos">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, descriptionAnexesEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                descriptionAnexesEditorRef.current = descriptionAnexesEditor;
              }}
              initialValue={medicalExamination?.descriptionAnexes || ''}
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

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item label="Conclusión">
            <Editor
              apiKey="x1e5v2aptwgl75irb3dsoiew6z3u09nt8m4chzduo7lclqf4"
              onInit={(_evt, conclusionEditor) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                conclusionEditorRef.current = conclusionEditor;
              }}
              initialValue={medicalExamination?.conclusion || ''}
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
