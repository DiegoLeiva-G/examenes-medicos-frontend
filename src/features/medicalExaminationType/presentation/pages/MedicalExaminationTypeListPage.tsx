import { type FC, useCallback, useMemo, useState } from 'react';
import { useNotification } from '@core/contexts';
import { useFilters2 } from '@core/hooks';
import { RiAddLine, RiDeleteBinLine, RiHome4Line, RiSearchLine } from '@remixicon/react';
import { BreadCrumb, Container, DocumentMetadata } from '../../../_global';
import { deleteMedicalExaminationType } from './controller.ts';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { type MedicalExaminationTypeEntity, type MedicalExaminationTypeGetAllResponseEntity } from '../../domain';
import { type loaderMedicalExaminationTypeList, type medicalExaminationTypeDynamicFilters } from '../dataFetching';
import { Table, type TableProps } from 'antd';
import { medicalExaminationTypes } from '@core/helpers';

export const MedicalExaminationTypeListPage: FC = () => {
  const { medicalExaminationType, filters } = useLoaderData<typeof loaderMedicalExaminationTypeList>();
  const { setNotification } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const { onChangeSearch, onChangePageLimit, onChangePage } =
    useFilters2<medicalExaminationTypeDynamicFilters>(filters);
  const navigate = useNavigate();

  const handleOnDeleteMedicalExaminationType = useCallback(
    (id: MedicalExaminationTypeEntity['id']) => {
      setLoading(true);
      deleteMedicalExaminationType.execute(id).then(response => {
        setLoading(false);
        const titleNotification = 'Eliminación del paciente médico';

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
          message: 'Se ha eliminado correctamente el paciente médico',
        });

        if (medicalExaminationType.results.length === 1 && medicalExaminationType.currentPage > 1) {
          onChangePage(medicalExaminationType.currentPage - 1);

          return;
        }

        navigate('');
      });
    },
    [medicalExaminationType, navigate, onChangePage, setNotification],
  );

  const columns: TableProps<MedicalExaminationTypeGetAllResponseEntity>['columns'] = useMemo(
    () => [
      {
        title: 'N°',
        key: 'current',
        render: (_, __, index) => index + 1,
      },
      {
        title: 'Nombre',
        key: 'name',
        render: (_, item) => (
          <Link
            to={`/tipos-de-examenes-medicos/${item.id}/editar`}
            className="font-semibold text-blue-800 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {item.name}
          </Link>
        ),
      },
      {
        title: 'Tipo de exámen',
        key: 'type',
        render: (_, item) => medicalExaminationTypes[item.type] || 'Tipo desconocido',
      },
      {
        title: '',
        key: 'action',
        render: (_, item) => (
          <button
            onClick={() => handleOnDeleteMedicalExaminationType(item.id)}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
            hover:bg-red-500
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600
            disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          >
            Eliminar
            <RiDeleteBinLine aria-hidden="true" className="-mr-0.5 h-5 w-5" />
          </button>
        ),
      },
    ],
    [handleOnDeleteMedicalExaminationType],
  );

  const navItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: RiHome4Line,
        href: '/home',
      },
      {
        title: 'Tipos de exámenes médicos',
        href: '/tipos-de-examenes-medicos',
      },
    ],
    [],
  );

  return (
    <>
      <DocumentMetadata title={`Tipos de exámenes médicos - Exámenes médicos`} />
      <BreadCrumb title={`Lista de Tipos de exámenes médicos`} navItems={navItems} />
      <Container>
        <div className="mx-auto lg:mx-0">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RiSearchLine className="h-5 w-5 text-gray-400 dark:text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-96 rounded-md border-0 py-1.5 pl-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:focus:ring-primary-500 dark:bg-gray-700 sm:text-sm sm:leading-6"
                placeholder="Buscar..."
                onChange={onChangeSearch}
                defaultValue={filters.search}
              />
            </div>
            <div className="flex justify-end">
              <Link
                to="crear"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-900 dark:bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm
            hover:bg-primary-500
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <RiAddLine aria-hidden="true" className="-mr-0.5 h-5 w-5" />
                Crear tipo de examen médico
              </Link>
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
                    dataSource={medicalExaminationType.results}
                    loading={loading}
                    rowKey="id"
                    pagination={{
                      total: medicalExaminationType.total,
                      showTotal: (total, range) =>
                        `Mostrando desde el ${range[0]} al ${range[1]} de ${total} resultados`,
                      onChange: onChangePage,
                      pageSize: filters.limit,
                      style: { marginLeft: 16 },
                      showSizeChanger: true,
                      position: ['bottomLeft'],
                      pageSizeOptions: filters.totalPageLimits,
                      onShowSizeChange: (_, limit) => onChangePageLimit(limit),
                      current: medicalExaminationType.currentPage,
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
