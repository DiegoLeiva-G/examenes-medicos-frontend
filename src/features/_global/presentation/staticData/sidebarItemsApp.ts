import {
  RiFileChartLine,
  RiHome4Fill,
  RiMoneyDollarCircleLine,
  RiPencilRuler2Line,
} from '@remixicon/react';

export const sidebarItemsApp = [
  {
    key: 'home',
    title: 'Home',
    href: '/home',
    current: false,
    icon: RiHome4Fill,
    iconColor: 'text-slate-800',
  },
  {
    key: 'budgetSheets',
    title: 'Fichas de Presupuesto',
    href: '/fichas-de-presupuesto',
    current: false,
    icon: RiFileChartLine,
    iconColor: 'text-teal-900',
    children: [
      {
        key: 'investmentInitiatives',
        title: 'Iniciativas de inversion',
        href: '/fichas-de-presupuesto/iniciativas-de-inversion',
        current: false,
        icon: RiMoneyDollarCircleLine,
        iconColor: 'text-indigo-900',
      },
      {
        key: 'improvementProject',
        title: 'Proyectos de mejora',
        href: '/fichas-de-presupuesto/proyectos-de-mejora',
        current: false,
        icon: RiMoneyDollarCircleLine,
        iconColor: 'text-indigo-900',
      },
    ],
  },
  {
    key: 'financingSources',
    title: 'Fuentes de Financiamiento',
    href: '/fuentes-de-financiamiento',
    current: false,
    icon: RiMoneyDollarCircleLine,
    iconColor: 'text-indigo-900',
  },
  {
    key: 'measureUnits',
    title: 'Unidades de medida',
    href: '/unidades-de-medida',
    current: false,
    icon: RiPencilRuler2Line,
    iconColor: 'text-sky-900',
  },
];
