import { RiEmpathizeLine, RiFlaskLine, RiHealthBookLine, RiNurseLine } from '@remixicon/react';

export const homeCardItems = [
  {
    key: 'medicalExaminations',
    title: 'Examenes médicos',
    description: '...',
    href: '/Examenes-medicos',
    icon: RiHealthBookLine,
    iconColor: 'text-yellow-900',
    iconBackgroundColor: 'bg-yellow-50',
  },
  {
    key: 'medicalExaminationTypes',
    title: 'Tipos de examen médicos',
    description: '...',
    href: '/tipos-de-examenes-medicos',
    icon: RiFlaskLine,
    iconColor: 'text-green-900',
    iconBackgroundColor: 'bg-green-50',
  },
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

];
