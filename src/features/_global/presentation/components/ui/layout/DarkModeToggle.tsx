import { RiMoonLine, RiSunLine } from '@remixicon/react';
import type { FC } from 'react';
import { useTheme } from '@core/contexts/ThemeContext.tsx';

interface IDarkModeToggleProps {
  size?: string;
  textColorMoon?: string;
  textColorSun?: string;
}

export const DarkModeToggle: FC<IDarkModeToggleProps> = ({
  size = 'h-5 w-5',
  textColorMoon = 'text-gray-100',
  textColorSun = 'text-gray-100',
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return isDarkMode ? (
    <RiMoonLine
      onClick={toggleTheme}
      className={`${size} ${textColorMoon} cursor-pointer rounded-full dark:bg-transparent`}
    />
  ) : (
    <RiSunLine onClick={toggleTheme} className={`${size} ${textColorSun} cursor-pointer rounded-full bg-transparent`} />
  );
};
