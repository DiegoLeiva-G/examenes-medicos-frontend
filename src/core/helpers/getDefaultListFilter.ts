export type IDynamicFilters<T extends string> = {
  [K in T]: IDynamicFilterData;
};

export interface IGetListFilterResponse<T extends string> {
  search: string;
  limit: number;
  totalPageLimits: number[];
  dynamics: IDynamicFilters<T> | null;
}

interface IDynamicFilterData {
  value: string;
  label: string;
}

export const getListFilter = <T extends string>(filters: {
  url: URL;
  totalPageLimits?: number[];
  dynamicFilters?: IDynamicFilters<T>;
}) => {
  const { url, totalPageLimits = [10, 25, 100], dynamicFilters } = filters;
  const search = url.searchParams.get('busqueda') || '';
  const page = Number(url.searchParams.get('pagina')) || 1;
  const limit = Number(url.searchParams.get('limite')) || totalPageLimits[0];

  const dynamics = dynamicFilters
    ? Object.entries(dynamicFilters).reduce((acc, [key, filterData]) => {
        const data = filterData as IDynamicFilterData;
        const value = url.searchParams.get(data.label) || data.value;

        return { ...acc, [key]: { label: data.label, value } };
      }, {} as IDynamicFilters<T>)
    : null;

  return { search, page, limit, totalPageLimits, dynamics };
};
