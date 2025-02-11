import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useFilters2 } from '@core/hooks';
import { RiAddLine, RiDeleteBinLine, RiFileTextLine, RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { deleteMedicalExamination } from './controller.ts';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { type MedicalExaminationEntity, type MedicalExaminationGetAllResponseEntity } from '../../domain';
import { type loaderMedicalExaminationList, type medicalExaminationDynamicFilters } from '../dataFetching';
import { Select, Table, type TableProps } from 'antd';
import { medicalExaminationTypesTranslation, textCapitalize } from '@core/helpers';
import { MedicalExaminationType } from '../../../medicalExaminationType';
import DOMPurify from 'dompurify';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import dayjs from 'dayjs';

pdfMake.vfs = (pdfFonts as any).pdfMake?.vfs || (pdfFonts as any);

export const MedicalExaminationListPage: FC = () => {
  const { medicalExaminations, filters } = useLoaderData<typeof loaderMedicalExaminationList>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const { onChangePageLimit, onChangePage } = useFilters2<medicalExaminationDynamicFilters>(filters);
  const navigate = useNavigate();

  const handleOnDeleteMedicalExamination = useCallback(
    (id: MedicalExaminationEntity['id']) => {
      setLoading(true);

      deleteMedicalExamination.execute(id).then(response => {
        setLoading(false);
        const titleNotification = 'Eliminación del exámen médico';

        if (response.error) {
          setNotification({
            type: 'error',
            title: titleNotification,
            message: 'Hubo un error, intentelo nuevamente',
          });

          return;
        }

        setNotification({
          type: 'success',
          title: titleNotification,
          message: 'Se ha eliminado correctamente el examen médico',
        });

        if (medicalExaminations.results.length === 1 && medicalExaminations.currentPage > 1) {
          onChangePage(medicalExaminations.currentPage - 1);

          return;
        }

        navigate('');
      });
    },
    [medicalExaminations, navigate, onChangePage, setNotification],
  );

  const generatePDF = (item: MedicalExaminationGetAllResponseEntity) => {
    try {
      const content = item.content ? JSON.parse(item.content) : {};

      const documentContent = [
        {
          text: `${medicalExaminationTypesTranslation[item.medicalExaminationType.type]} ${item.medicalExaminationType.name}`,
          style: 'header',
        },
        {
          text: `Nombre: ${item.medicalPatient.name} ${item.medicalPatient.lastName}`,
          style: 'sectionContent',
          margin: [],
        },
        {
          text: `Fecha del Examen: ${dayjs(item.dateExam).format('DD/MM/YYYY')}`,
          style: 'sectionContent',
          margin: [0, 10],
        },
      ];

      if (content.observation) {
        const sanitizedHTML = DOMPurify.sanitize(content.observation);
        documentContent.push({
          text: 'Observación:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.dimension) {
        const sanitizedHTML = DOMPurify.sanitize(content.dimension);
        documentContent.push({
          text: 'Dimensión:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.measures) {
        const sanitizedHTML = DOMPurify.sanitize(content.measures);
        documentContent.push({
          text: 'Medidas:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.diagnosticDimension) {
        const sanitizedHTML = DOMPurify.sanitize(content.diagnosticDimension);
        documentContent.push({
          text: 'Diagnóstico de Dimensión:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.anexes) {
        const sanitizedHTML = DOMPurify.sanitize(content.anexes);
        documentContent.push({
          text: 'Anexos:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.diagnosticAnexes) {
        const sanitizedHTML = DOMPurify.sanitize(content.diagnosticAnexes);
        documentContent.push({
          text: 'Diagnóstico de Anexos:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (content.conclusion) {
        const sanitizedHTML = DOMPurify.sanitize(textCapitalize(content.conclusion));
        documentContent.push({
          text: 'Conclusión:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(sanitizedHTML),
          style: 'sectionContent',
          margin: [0, 5],
        });
      }

      if (item.doctor) {
        const doctorInfo = [];

        // Agregar nombre del doctor si existe
        if (item.doctor.name && item.doctor.lastName) {
          doctorInfo.push({
            text: `Dr. ${item.doctor.name} ${item.doctor.lastName}`,
            style: 'doctorContent',
            margin: [0, 2],
          });
        }

        // Determinar qué índices usar según el tipo de examen
        let professionIndices: number[] = [];
        let specializationIndex = -1;

        if (item.medicalExaminationType.type === MedicalExaminationType.Ultrasound) {
          professionIndices = [1, 2]; // Mostrar profesiones en las posiciones [1, 2]
          specializationIndex = 0; // Mostrar especialización en la posición [0]
        } else if (item.medicalExaminationType.type === MedicalExaminationType.Ray) {
          professionIndices = [0]; // Mostrar profesión en la posición [0]
          specializationIndex = -1; // No mostrar especialización
        }

        // Agregar profesiones en una disposición horizontal con guiones
        if (item.doctor.nameProfession && professionIndices.length > 0) {
          const professions = professionIndices
            .filter((index) => index >= 0 && index < item.doctor.nameProfession.length)
            .map((index) => item.doctor.nameProfession[index]) // Obtener las profesiones
            .join(' -'); // Unir las profesiones con un guion

          // Añadir las profesiones como un solo texto
          doctorInfo.push({
            text: professions,
            style: 'doctorContent',
            margin: [0, 5], // Margen externo
          });
        }

        // Agregar especialización si el índice es válido
        if (
          item.doctor.specialization &&
          specializationIndex >= 0 &&
          specializationIndex < item.doctor.specialization.length
        ) {
          doctorInfo.push({
            text: `${item.doctor.specialization[specializationIndex]}`,
            style: 'doctorContent',
            margin: [0, 2],
          });
        }

        // Agregar el bloque del doctor al contenido del PDF
        documentContent.push({
          columns: [
            {}, // Columna vacía para empujar el contenido a la derecha
            {
              width: 'auto', // Ancho automático para ajustarse al contenido
              alignment: 'center', // Centrar el contenido dentro del bloque
              stack: doctorInfo, // Apilar todos los elementos del doctor
            },
          ],
          columnGap: 10, // Espacio entre las columnas
          margin: [0, 10], // Margen externo del bloque
        });
      }

      const documentDefinition = {
        content: documentContent,
        styles: {
          header: {
            fontSize: 22,
            bold: true,
            alignment: 'center',
            color: '#000000',
            margin: [0, 0, 0, 20],
          },
          subheader: {
            fontSize: 16,
            bold: true,
            color: '#333333',
            margin: [0, 10, 0, 10],
          },
          sectionTitle: {
            fontSize: 14,
            bold: true,
            color: '#000000',
            margin: [0, 10, 0, 5],
            decoration: 'underline',
          },
          sectionContent: {
            fontSize: 12,
            color: '#000000',
            margin: [0, 5, 0, 5],
          },
          doctorRightAligned: {
            fontSize: 12,
            color: '#000000',
            alignment: 'right', // Alinear a la derecha
            margin: [0, 2, 0, 2], // Reducir la separación vertical
          },
        },
      };

      pdfMake.createPdf(documentDefinition).getDataUrl(dataUrl => {
        const iframe = document.createElement('iframe');
        iframe.src = dataUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        container.style.zIndex = '1000';
        container.appendChild(iframe);

        // Añadir el contenedor al cuerpo del documento
        document.body.appendChild(container);

        // Cerrar el modal al hacer clic fuera del iframe
        container.addEventListener('click', () => {
          document.body.removeChild(container);
        });
      });
    } catch (error) {
      console.error('Error al parsear el contenido:', error);
      setNotification({
        type: 'error',
        title: 'Error al generar el PDF',
        message: 'Hubo un problema al procesar el contenido del examen.',
      });
    }
  };

  const columns: TableProps<MedicalExaminationGetAllResponseEntity>['columns'] = useMemo(
    () => [
      {
        title: 'Nombre del paciente',
        key: 'medicalPatientName',
        render: (_, item) => (
          <Link
            to={`/examenes-medicos/${item.id}/editar`}
            className="font-semibold text-blue-800 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {`${item.medicalPatient.name} ${item.medicalPatient.lastName}`}
          </Link>
        ),
      },
      {
        title: 'Tipo del examen',
        key: 'medicalExaminationType',
        render: (_, item) => `${medicalExaminationTypesTranslation[item.medicalExaminationType.type]}`,
      },
      {
        title: 'Nombre del tipo de examen',
        key: 'medicalExaminationTypeName',
        render: (_, item) => `${item.medicalExaminationType.name}`,
      },
      {
        title: 'Fecha del examen',
        key: 'dateExam',
        render: (_, item) => `${item.dateExam}`,
      },
      {
        title: 'Acciones',
        key: 'actions',
        render: (_, item) => (
          <div className="flex gap-2">
            <button
              onClick={() => generatePDF(item)}
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
              hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Ver PDF
              <RiFileTextLine aria-hidden="true" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleOnDeleteMedicalExamination(item.id)}
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
              hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Eliminar
              <RiDeleteBinLine aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        ),
      },
    ],
    [generatePDF, handleOnDeleteMedicalExamination],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Examenes médicos',
        href: '/examenes-medicos',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Exámenes médicos - Examenes médicos`} />
      <BreadCrumb title={`Lista de examenes médicos`} navItems={navItems} />
      <Container>
        <div className="mx-auto lg:mx-0">
          <div className="flex justify-between w-full">
            <div className="flex gap-4">
              <div className="w-44 font-semibold dark:text-gray-50">
                Mes:
                <Select placeholder="Seleccione el tipo de examen médico..." className="block w-full rounded-md">
                  <Select.Option value="mostrar-todo">Mostrar todo</Select.Option>
                  <Select.Option value={MedicalExaminationType.Ultrasound}>Ecografía</Select.Option>
                  <Select.Option value={MedicalExaminationType.Ray}>Rayos</Select.Option>
                  <Select.Option value={MedicalExaminationType.Resonance}>Resonancia</Select.Option>
                </Select>
              </div>
            </div>

            <div>
              <div>&nbsp;</div>
              <div className="flex justify-end">
                <Link
                  to="crear"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-900 dark:bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
          hover:bg-primary-500 dark:hover:bg-primary-800
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <RiAddLine aria-hidden="true" className="-mr-0.5 h-5 w-5" />
                  Crear examen médico
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-600 pt-5 mt-5 lg:mx-0 lg:max-w-none">
          <div className="flow-root">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg dark:ring-white dark:ring-opacity-10">
                  <Table
                    columns={columns}
                    dataSource={medicalExaminations.results}
                    loading={loading}
                    rowKey="id"
                    pagination={{
                      total: medicalExaminations.total,
                      showTotal: (total, range) =>
                        `Mostrando desde el ${range[0]} al ${range[1]} de ${total} resultados`,
                      onChange: onChangePage,
                      pageSize: filters.limit,
                      style: { marginLeft: 16 },
                      showSizeChanger: true,
                      position: ['bottomLeft'],
                      pageSizeOptions: filters.totalPageLimits,
                      onShowSizeChange: (_, limit) => onChangePageLimit(limit),
                      current: medicalExaminations.currentPage,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
