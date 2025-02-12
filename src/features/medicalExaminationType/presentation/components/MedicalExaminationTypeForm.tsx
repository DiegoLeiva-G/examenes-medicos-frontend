import { type MedicalExaminationTypeGetAllResponseEntity } from '../../domain';
import { type FC, useMemo, useRef } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiSaveLine } from '@remixicon/react';
import { Form, Input, Select } from 'antd';
import { medicalExaminationTypesTranslation } from '@core/helpers';
import { Editor } from '@tinymce/tinymce-react';

enum FormFields {
  name = 'name',
  type = 'type',
  observation = 'observation',
  observation2 = 'observation2',
  dimension = 'dimension',
  dimension2 = 'dimension2',
  descriptionDimension = 'descriptionDimension',
  anexes = 'anexes',
  anexes2 = 'anexes2',
  descriptionAnexes = 'descriptionAnexes',
  conclusion = 'conclusion',
}

export interface IMedicalExaminationTypeFormValues {
  [FormFields.name]: string;
  [FormFields.type]: string;
  [FormFields.observation]: string;
  [FormFields.observation2]: string;
  [FormFields.dimension]: string;
  [FormFields.dimension2]: string;
  [FormFields.descriptionDimension]: string;
  [FormFields.anexes]: string;
  [FormFields.anexes2]: string;
  [FormFields.descriptionAnexes]: string;
  [FormFields.conclusion]: string;
}

interface IMedicalExaminationTypeFormProps {
  medicalExaminationType?: MedicalExaminationTypeGetAllResponseEntity | null;
  loading?: boolean;
  onSubmitData: (values: IMedicalExaminationTypeFormValues) => void;
}

export const MedicalExaminationTypeForm: FC<IMedicalExaminationTypeFormProps> = ({
  onSubmitData,
  medicalExaminationType,
  loading,
}) => {
  const [form] = Form.useForm();
  const observationEditorRef = useRef(null);
  const observation2EditorRef = useRef(null);
  const dimensionEditorRef = useRef(null);
  const dimension2EditorRef = useRef(null);
  const descriptionDimensionEditorRef = useRef(null);
  const anexesEditorRef = useRef(null);
  const anexes2EditorRef = useRef(null);
  const descriptionAnexesEditorRef = useRef(null);
  const conclusionEditorRef = useRef(null);

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
              initialValue={medicalExaminationType?.observation || ''}
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
              initialValue={medicalExaminationType?.observation2 || ''}
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
              initialValue={medicalExaminationType?.dimension || ''}
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
              initialValue={medicalExaminationType?.dimension2 || ''}
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
              initialValue={medicalExaminationType?.descriptionDimension || ''}
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
              initialValue={medicalExaminationType?.anexes || ''}
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
              initialValue={medicalExaminationType?.anexes2 || ''}
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
              initialValue={medicalExaminationType?.descriptionAnexes || ''}
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
              initialValue={medicalExaminationType?.conclusion || ''}
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
