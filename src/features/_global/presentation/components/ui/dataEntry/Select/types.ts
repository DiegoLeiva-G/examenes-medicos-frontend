import { CSSProperties, ReactNode } from 'react';

export type SelectMode = 'multiple' | 'tags' | undefined;
export type SelectSize = 'large' | 'middle' | 'small';
export type SelectStatus = 'error' | 'warning' | undefined;
export type SelectPlacement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
export type SelectVariant = 'outlined' | 'filled' | 'borderless';

export interface FieldNames {
  label?: string;
  value?: string;
  options?: string;
}

export interface SelectOption {
  value: string | number;
  label: string | ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}

export interface SelectProps {
  allowClear?: boolean;
  autoClearSearchValue?: boolean;
  autoFocus?: boolean;
  defaultActiveFirstOption?: boolean;
  defaultOpen?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  popupClassName?: string;
  popupMatchSelectWidth?: boolean | number;
  dropdownRender?: (menu: ReactNode) => ReactNode;
  dropdownStyle?: CSSProperties;
  fieldNames?: FieldNames;
  filterOption?: boolean | ((inputValue: string, option: SelectOption) => boolean);
  filterSort?: (optionA: SelectOption, optionB: SelectOption) => number;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  labelInValue?: boolean;
  listHeight?: number;
  loading?: boolean;
  maxCount?: number;
  maxTagCount?: number | 'responsive';
  maxTagPlaceholder?: ReactNode | ((omittedValues: SelectOption[]) => ReactNode);
  maxTagTextLength?: number;
  menuItemSelectedIcon?: ReactNode;
  mode?: SelectMode;
  notFoundContent?: ReactNode;
  open?: boolean;
  optionFilterProp?: string;
  optionLabelProp?: string;
  options?: SelectOption[];
  optionRender?: (option: SelectOption) => ReactNode;
  placeholder?: ReactNode;
  placement?: SelectPlacement;
  prefix?: ReactNode;
  removeIcon?: ReactNode;
  searchValue?: string;
  showSearch?: boolean;
  size?: SelectSize;
  status?: SelectStatus;
  suffixIcon?: ReactNode;
  tagRender?: (props: { label: ReactNode; value: any; disabled: boolean; onClose: () => void }) => ReactNode;
  labelRender?: (label: ReactNode) => ReactNode;
  tokenSeparators?: string[];
  value?: any;
  variant?: SelectVariant;
  virtual?: boolean;
  onBlur?: () => void;
  onChange?: (value: any, option: SelectOption | SelectOption[]) => void;
  onClear?: () => void;
  onDeselect?: (value: any, option: SelectOption) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
  onFocus?: () => void;
  onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPopupScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: any, option: SelectOption) => void;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessages?: string[];
  name?: string;
}
