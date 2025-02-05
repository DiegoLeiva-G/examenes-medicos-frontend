import {
  RiEmpathizeLine, RiFlaskLine,
  RiMoneyDollarCircleLine, RiNurseLine,
  RiPencilRuler2Line,
} from '@remixicon/react';

export const homeCardItems = [
  {
    key: 'doctors',
    title: 'Médicos',
    description: '...',
    href: '/medicos',
    icon: RiNurseLine,
    iconColor: 'text-red-900',
    iconBackgroundColor: 'bg-red-50',
  },
  {
    key: 'medicalPatients',
    title: 'Pacientes médicos',
    description: '...',
    href: '/pacientes-medicos',
    icon: RiEmpathizeLine,
    iconColor: 'text-blue-900',
    iconBackgroundColor: 'bg-blue-50',
  },
  {
    key: 'medicalExaminationTypes',
    title: 'Tipos de exámenes médicos',
    description: '...',
    href: '/tipos-de-examenes-medicos',
    icon: RiFlaskLine,
    iconColor: 'text-green-900',
    iconBackgroundColor: 'bg-green-50',
  },
  {
    key: 'financingSources',
    title: 'Fuentes de Financiamiento',
    description: '...',
    href: '/fuentes-de-financiamiento',
    icon: RiMoneyDollarCircleLine,
    iconColor: 'text-indigo-900',
    iconBackgroundColor: 'bg-indigo-50',
  },
  {
    key: 'measureUnits',
    title: 'Unidades de medida',
    description: '...',
    href: '/unidades-de-medida',
    icon: RiPencilRuler2Line,
    iconColor: 'text-sky-900',
    iconBackgroundColor: 'bg-sky-50',
  },
];
