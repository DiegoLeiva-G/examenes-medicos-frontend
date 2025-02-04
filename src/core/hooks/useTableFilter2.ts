import { useState, useCallback, useEffect, type ChangeEvent } from 'react';
import { useDebounce, useQueryParams } from '@core/hooks';
import { type IDynamicFilters, type IGetListFilterResponse } from '@core/helpers';

export const useFilters2 = <T extends string>({ dynamics = null, totalPageLimits }: IGetListFilterResponse<T>) => {
  const { setQueryParams, deleteQueryParams, handleOnNavigate } = useQueryParams();
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [filters, setFilters] = useState<IDynamicFilters<T> | null>(dynamics);

  const onChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.value) {
        deleteQueryParams('busqueda');
      }
      deleteQueryParams('pagina');
      setSearchValue(event.target.value);
    },
    [deleteQueryParams],
  );

  const onChangePageLimit = useCallback(
    (pageLimit: number) => {
      deleteQueryParams('pagina');
      pageLimit !== totalPageLimits[0] ? setQueryParams('limite', pageLimit.toString()) : deleteQueryParams('limite');
      handleOnNavigate();
    },
    [deleteQueryParams, totalPageLimits, setQueryParams, handleOnNavigate],
  );

  const onChangePage = useCallback(
    (page: number) => {
      page !== 1 ? setQueryParams('pagina', page.toString()) : deleteQueryParams('pagina');

      handleOnNavigate();
    },
    [setQueryParams, deleteQueryParams, handleOnNavigate],
  );

  const onChangeFilter = useCallback(
    (filterKey: T, filterValue: unknown) => {
      if (!filters) {
        return;
      }

      setFilters({
        ...filters,
        [filterKey]: {
          ...filters[filterKey],
          value: filterValue,
        },
      });

      const label = filters[filterKey].label;

      if (filterValue) {
        setQueryParams(label, filterValue.toString());
      } else {
        deleteQueryParams(label);
      }

      deleteQueryParams('pagina');

      handleOnNavigate();
    },
    [deleteQueryParams, setQueryParams, handleOnNavigate, filters],
  );

  useEffect(() => {
    if (debouncedSearchValue) {
      setQueryParams('busqueda', debouncedSearchValue);
    }

    handleOnNavigate();
  }, [debouncedSearchValue, setQueryParams, handleOnNavigate]);

  return {
    onChangeSearch,
    onChangePageLimit,
    onChangePage,
    onChangeFilter,
  };
};
