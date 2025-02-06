import { RiEmpathizeLine, RiFlaskLine, RiHealthBookLine, RiHome4Fill, RiNurseLine } from '@remixicon/react';

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
    key: 'medicalExaminations',
    title: 'Examenes médicos',
    href: '/Examenes-medicos',
    current: false,
    icon: RiHealthBookLine,
    iconColor: 'text-yellow-900',
  },
  {
    key: 'medicalExaminationTypes',
    title: 'Tipos de examen médicos',
    href: '/tipos-de-examenes-medicos',
    current: false,
    icon: RiFlaskLine,
    iconColor: 'text-green-900',
  },
  {
    key: 'doctors',
    title: 'Médicos',
    href: '/medicos',
    current: false,
    icon: RiNurseLine,
    iconColor: 'text-red-900',
  },
  {
    key: 'medicalPatients',
    title: 'Pacientes médicos',
    href: '/pacientes-medicos',
    current: false,
    icon: RiEmpathizeLine,
    iconColor: 'text-blue-900',
  },
];
