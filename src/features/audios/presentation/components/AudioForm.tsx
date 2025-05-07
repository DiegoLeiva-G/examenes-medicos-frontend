import { type FC, useState } from 'react';
import { Column, Row } from '../../../_global';
import { Link } from 'react-router-dom';
import { RiInboxLine, RiSaveLine } from '@remixicon/react';
import { Form, Input, } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { type AudioFormEntity } from '../../domain';

enum FormFields {
  name = 'name',
  path = 'path',
  type = 'type',
  size = 'size',
}

export interface IAudioFormValues {
  [FormFields.name]: string;
  [FormFields.path]: string;
  [FormFields.type]: string;
  [FormFields.size]: number;
}

interface IAudioFormProps {
  audio?: AudioFormEntity | null;
  loading?: boolean;
  onSubmitData: (values: IAudioFormValues) => void;
}

export const AudioForm: FC<IAudioFormProps> = ({ onSubmitData, audio, loading }) => {
  const [form] = Form.useForm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleUpload = (file: File) => {
    setSelectedFile(file);
    form.setFieldValue(FormFields.path, file.name);
    return false;
  };

  return (
    <>
    <Form
      form={form}
      layout="vertical"
      method="post"
      onSubmitCapture={async event => {
        event.preventDefault();

        try {
          const values = await form.validateFields();

          if (!selectedFile) {
            alert('Debe seleccionar un archivo de audio');
            return;
          }

          setIsProcessing(true); // ✅ Activa el mensaje modal

          const name = values[FormFields.name];

          const formData = new FormData();
          formData.append('audio', selectedFile);
          formData.append('name', name);

          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/audios/upload-audio`, {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();

          if (!response.ok) {
            alert(data.detail || 'Hubo un problema al procesar el audio');
            setIsProcessing(false);
            return;
          }

          onSubmitData({
            ...values,
            path: data.path,
            type: data.type,
            size: data.size,
          });

          setIsProcessing(false); // Desactiva el mensaje tras terminar

        } catch (error) {
          console.error('Error al guardar:', error);
          alert('No se pudo guardar el audio. Inténtalo nuevamente.');
          setIsProcessing(false);
        }
      }}
    >
      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-4">
          <Form.Item
            required
            label="Nombre"
            rules={[{ required: true, message: 'Debe ingresar el nombre del audio' }]}
            initialValue={audio?.name}
            name={FormFields.name}
          >
            <Input placeholder="Ingrese el nombre..." disabled={loading} />
          </Form.Item>
        </Column>
      </Row>

      <Row spacingX="sm:gap-x-6">
        <Column colSpan="col-span-full">
          <Form.Item
            label="Archivo de audio"
            name={FormFields.path}
            rules={[{ required: true, message: 'Debe seleccionar un archivo de audio' }]}
            initialValue={audio?.path ?? ''}
          >
            <Dragger
              name="audio"
              customRequest={({ file }) => handleUpload(file as File)}
              showUploadList={false}
              accept="audio/*"
              disabled={loading}
            >
              <p className="ant-upload-drag-icon">
                <RiInboxLine />
              </p>
              <p className="ant-upload-text">Haz clic o arrastra un archivo de audio</p>
              <p className="ant-upload-hint">Formatos soportados: MP3, WAV, OGG</p>
            </Dragger>
          </Form.Item>

          {/* ✅ Vista previa del archivo */}
          {selectedFile && (
            <div className="mt-2 text-sm text-green-600 dark:text-green-400">
              Archivo seleccionado: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
            </div>
          )}
        </Column>
      </Row>

      <div className="flex justify-end mt-10">
        <div className="flex justify-end mr-5">
          <Link
            to="/audios"
            className="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Cancelar
            </button>
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading || isProcessing}
          className={`inline-flex justify-center items-center gap-x-1.5 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
            (loading || isProcessing)
              ? 'disabled:cursor-not-allowed disabled:bg-primary-400'
              : ''
          }`}
        >
          {(loading || isProcessing) ? (
            <div className="w-5 h-5 rounded-full border-2 border-transparent border-t-white animate-spin" />
          ) : (
            <RiSaveLine aria-hidden="true" className="-mr-0.5 h-5 w-5" />
          )}
          {(loading || isProcessing) ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </Form>
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <div
              className="w-8 h-8 border-4 border-t-primary-500 border-r-primary-500 border-b-primary-500 border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
              Se está guardando y transformando el audio...
            </p>
          </div>
        </div>
      )}
    </>
  );
};