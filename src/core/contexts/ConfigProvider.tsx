import es from 'antd/locale/es_ES';
import { type ThemeConfig, ConfigProvider } from 'antd';
import type { FC, ReactNode } from 'react';
import { useTheme } from '@core/contexts/ThemeContext.tsx';

export const AntdConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();

  const lightTheme: ThemeConfig = {
    components: {
      Select: {
        optionSelectedBg: '#D6DBDF', // 100
      },
      Input: {
        colorBgContainer: '#FFFFFF', // White background for input containers
      },
      DatePicker: {
        cellActiveWithRangeBg: '#EBEDEF', // Fondo rango de fechas
      },
      Table: {
        headerBg: '#212F3C',
        headerColor: '#f3f4f6',
        headerSplitColor: '#212F3C',
      },
      Tree: {
        nodeSelectedBg: '#85929E',
        nodeHoverBg: '#AEB6BF',
      },
    },
    token: {
      colorPrimary: '#34495E', // Primary color
      colorText: '#000000', // Text color
      colorBgContainer: '#FFFFFF', // Background color for containers
      colorBgElevated: '#F8F9F9', // Slightly darker background for elevated elements
      colorTextSecondary: '#34495E', // Secondary text color
      colorTextPlaceholder: '#85929E', // Placeholder text color for inputs
      colorBorder: '#D6DBDF', // Light border color
      colorIcon: '#34495E', // Icon color
    },
  };

  const darkTheme: ThemeConfig = {
    components: {
      Select: {
        optionSelectedBg: '#283747', // 700
        multipleItemBg: '#212F3C',
      },
      Input: {
        colorBgContainer: '#374151', // Dark background for input containers
      },
      DatePicker: {
        cellActiveWithRangeBg: '#283747', // Fondo rango de fechas
        cellHoverBg: '#34495E', // Fondo al pasar el mouse
        colorPrimary: '#85929E',
      },
      Table: {
        headerBg: '#283747',
        borderColor: '#4b5563',
        headerSplitColor: '#283747',
      },
      Tree: {
        nodeSelectedBg: '#85929E',
        nodeHoverBg: '#AEB6BF',
      },
    },
    token: {
      colorPrimary: '#85929E', // Primary color
      colorPrimaryHover: '#AEB6BF', // Hover state color
      colorPrimaryActive: '#AEB6BF', // Active state color
      colorBorder: '#6b7280', // Dark border color
      colorText: '#FFFFFF', // Text color
      colorBgContainer: '#374151', // Background color for containers
      colorBgElevated: '#374151', // Elevated elements background color
      colorTextSecondary: '#AEB6BF', // Secondary text color
      colorTextPlaceholder: '#AEB6BF', // Placeholder text color for inputs
      colorIcon: '#FFFFFF', // Icon color
    },
  };

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme} locale={es}>
      {children}
    </ConfigProvider>
  );
};
