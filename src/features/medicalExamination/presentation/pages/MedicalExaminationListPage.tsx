import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useFilters2 } from '@core/hooks';
import { RiAddLine, RiDeleteBinLine, RiFileTextLine, RiHome4Line } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { deleteMedicalExamination } from './controller.ts';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { type MedicalExaminationEntity, type MedicalExaminationGetAllResponseEntity } from '../../domain';
import { type loaderMedicalExaminationList, type medicalExaminationDynamicFilters } from '../dataFetching';
import { DatePicker, Input, Select, Table, type TableProps } from 'antd';
import { apsaIcon, medicalExaminationTypesTranslation, textCapitalize } from '@core/helpers';
import { MedicalExaminationType } from '../../../medicalExaminationType';
import DOMPurify from 'dompurify';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { debounce } from 'lodash';

dayjs.extend(weekOfYear);
pdfMake.vfs = (pdfFonts as any).pdfMake?.vfs || (pdfFonts as any);

export const MedicalExaminationListPage: FC = () => {
  const { medicalExaminations, filters } = useLoaderData<typeof loaderMedicalExaminationList>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const { onChangePageLimit, onChangePage } = useFilters2<medicalExaminationDynamicFilters>(filters);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<dayjs.Dayjs | null>(null);
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = debounce((value: string) => {
    setSearchQuery(value);
  }, 500);

  const cleanHTML = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const emptyParagraphs = tempDiv.querySelectorAll('p');
    emptyParagraphs.forEach((p) => {
      if (!p.textContent?.trim()) {
        p.remove();
      }
    });

    tempDiv.innerHTML = tempDiv.innerHTML.replace(/(\n\s*){2,}/g, '\n');

    return tempDiv.innerHTML;
  };

  const generatePDF = (item: MedicalExaminationGetAllResponseEntity) => {
    try {
      const documentContent = [
        {
          columns: [
            {
              width: '50%',
              stack: [
                {
                  text: `Nombre: ${item.medicalPatient.name} ${item.medicalPatient.lastName} ${item.medicalPatient.secondaryLastName || ''}`,
                  style: 'sectionContent',
                  margin: [0, 1.5],
                },
                {
                  text: `Edad: ${item.medicalPatient} Años`,
                  style: 'sectionContent',
                  margin: [0, 1.5],
                },
                {
                  text: `Fecha del examen: ${dayjs(item.dateExam).format('DD/MM/YYYY')}`,
                  style: 'sectionContent',
                  margin: [0, 1.5],
                },
                {
                  text: `F.U.R.: ${dayjs(item.medicalPatient.fur).format('DD/MM/YYYY')}`,
                  style: 'sectionContent',
                  margin: [0, 1.5],
                },
              ],
            },
            {
              width: '50%',
              image: apsaIcon,
              fit: [150, 150],
              alignment: 'right',
            },
          ],
          columnGap: 10,
          margin: [0, 10],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,
              y2: 0,
              lineWidth: 1,
              lineColor: '#cccccc',
            },
          ],
          margin: [0, 10],
        },
        {
          text: `${medicalExaminationTypesTranslation[item.medicalExaminationType.type]} ${item.medicalExaminationType.name}`,
          style: 'header',
        },
      ];

      documentContent.push({
        text: `Hallazgos:`,
        style: 'sectionTitle',
        margin: [0, 5],
      });

      if (item.observation) {
        const sanitizedHTML = DOMPurify.sanitize(item.observation);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.observation2) {
        const sanitizedHTML = DOMPurify.sanitize(item.observation2);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.dimension) {
        const sanitizedHTML = DOMPurify.sanitize(item.dimension);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.dimension2) {
        const sanitizedHTML = DOMPurify.sanitize(item.dimension2);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.descriptionDimension) {
        const sanitizedHTML = DOMPurify.sanitize(item.descriptionDimension);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.anexes) {
        const sanitizedHTML = DOMPurify.sanitize(textCapitalize(item.anexes));
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          text: 'Anexos:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
          margin: [0, 1.5],
        });
      }

      if (item.anexes2) {
        const sanitizedHTML = DOMPurify.sanitize(item.anexes2);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
        });
      }

      if (item.descriptionAnexes) {
        const sanitizedHTML = DOMPurify.sanitize(item.descriptionAnexes);
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
          margin: [0, 1.5],
        });
      }

      if (item.conclusion) {
        const sanitizedHTML = DOMPurify.sanitize(textCapitalize(item.conclusion));
        const cleanedHTML = cleanHTML(sanitizedHTML);
        documentContent.push({
          text: 'Conclusión:',
          style: 'sectionTitle',
          margin: [0, 10],
        });
        documentContent.push({
          stack: htmlToPdfmake(cleanedHTML),
          style: 'sectionContent',
          margin: [0, 1.5],
        });
      }

      if (item.doctor) {
        const doctorInfo = [];

        if (item.doctor.name && item.doctor.lastName) {
          doctorInfo.push({
            text: `Dr. ${item.doctor.name} ${item.doctor.lastName}`,
            style: 'doctorContent',
            margin: [0, 2],
          });
        }

        if (
          item.medicalExaminationType.name === 'Mamaria' ||
          item.medicalExaminationType.name === 'Obstetrica'
        ) {
          if (item.doctor.nameProfession && item.doctor.nameProfession.length > 2) {
            doctorInfo.push({
              text: `${item.doctor.nameProfession[1]} -${item.doctor.nameProfession[2]}`,
              style: 'doctorContent',
              margin: [0, 5],
            });
            doctorInfo.push({
              text: `${item.doctor.specialization[0]} `,
              style: 'doctorContent',
              margin: [0, 5],
            });
          }
        } else {
          if (item.doctor.nameProfession && item.doctor.nameProfession.length > 0) {
            doctorInfo.push({
              text: `${item.doctor.nameProfession[0]}`,
              style: 'doctorContent',
              margin: [0, 5],
            });
          }
        }

        documentContent.push({
          columns: [
            {},
            {
              width: 'auto',
              alignment: 'center',
              stack: doctorInfo,
            },
          ],
          columnGap: 10,
          margin: [0, 10],
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
            margin: [0, 1.5],
          },
          subheader: {
            fontSize: 16,
            bold: true,
            color: '#333333',
            margin: [0, 1.5],
          },
          sectionTitle: {
            fontSize: 14,
            bold: true,
            color: '#000000',
            margin: [0, 1.5],
            decoration: 'underline',
          },
          sectionContent: {
            fontSize: 12,
            color: '#000000',
            margin: [0, 1.5],
          },
          doctorRightAligned: {
            fontSize: 12,
            color: '#000000',
            alignment: 'right',
            margin: [0, 1.5],
          },
          doctorContent: {
            fontSize: 14,
            bold: true,
            color: '#000000',
            margin: [0, 1.5],
          },
        },
      };

      pdfMake.createPdf(documentDefinition).getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const newWindow = window.open(url, '_blank');
        if (!newWindow) {
          console.error('No se pudo abrir una nueva pestaña.');
          setNotification({
            type: 'error',
            title: 'Error al abrir el PDF',
            message: 'No se pudo abrir el PDF en una nueva pestaña. Verifica los ajustes de tu navegador.',
          });
        }
      });
    } catch (error) {
      console.error('Error al generar el PDF:', error);
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
        render: (_, item) => `${dayjs(item.dateExam).format('DD/MM/YYYY')}`,
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

  const filteredMedicalExaminations = useMemo(() => {
    let filteredResults = medicalExaminations.results;

    if (selectedType) {
      filteredResults = filteredResults.filter(
        (item) => item.medicalExaminationType.type === selectedType
      );
    }

    if (selectedWeek) {
      const startOfWeek = selectedWeek.startOf('week');
      const endOfWeek = selectedWeek.endOf('week');

      filteredResults = filteredResults.filter((item) => {
        const examDate = dayjs(item.dateExam);
        return examDate.isAfter(startOfWeek) && examDate.isBefore(endOfWeek);
      });
    }

    if (selectedDay) {
      const selectedDate = selectedDay.startOf('day');
      filteredResults = filteredResults.filter((item) => {
        const examDate = dayjs(item.dateExam).startOf('day');
        return examDate.isSame(selectedDate);
      });
    }

    if (searchQuery.trim()) {
      filteredResults = filteredResults.filter((item) =>
        `${item.medicalPatient.name} ${item.medicalPatient.lastName}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    return filteredResults;
  }, [medicalExaminations.results, selectedDay, selectedType, selectedWeek, searchQuery]);

  return (
    <>
      <DocumentMetadata title={`Exámenes médicos - Examenes médicos`} />
      <BreadCrumb title={`Lista de examenes médicos`} navItems={navItems} />
      <Container>
        <div className="mx-auto lg:mx-0">
          <div className="flex justify-between w-full">
            <div className="flex gap-4">
              <div className="w-44 font-semibold dark:text-gray-50">
                Paciente
                <Input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={e => handleSearch(e.target.value)}
                />
              </div>

              <div className="w-44 font-semibold dark:text-gray-50">
                Tipo de examen:
                <Select
                  placeholder="Selecciona un tipo de examen"
                  style={{ width: 200 }}
                  onChange={value => setSelectedType(value)}
                  allowClear
                  value={selectedType || undefined}
                >
                  <Select.Option value={null}>Mostrar todo</Select.Option>
                  <Select.Option value="Ultrasound">Ecografía</Select.Option>
                  <Select.Option value="Ray">Rayos</Select.Option>
                  <Select.Option value="Resonance">Resonancia</Select.Option>
                </Select>
              </div>

              <div className="ml-5 w-44 font-semibold dark:text-gray-50">
                Día
                <DatePicker placeholder="Selecciona un día" onChange={date => setSelectedDay(date)} allowClear />
              </div>

              <div className="w-44 font-semibold dark:text-gray-50">
                Semana
                <DatePicker
                  picker="week"
                  style={{ width: 200 }}
                  placeholder="Selecciona una semana"
                  onChange={date => setSelectedWeek(date)}
                  allowClear
                />
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
                    dataSource={filteredMedicalExaminations}
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
