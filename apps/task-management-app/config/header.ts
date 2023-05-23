import type { HeaderConfig } from '@/task-management-app/types';

export const headerConfig: HeaderConfig = {
  header: [
    {
      disabled: false,
      href: '/projects',
      title: 'Project',
    },
    {
      disabled: true,
      href: '/templates',
      title: 'Templates',
    },
  ],
};
