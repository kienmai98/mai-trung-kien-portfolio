import { type DashboardConfig } from '@/web/types';
import { siteConfig } from './site';

export const dashboardConfig: DashboardConfig = {
  externalNav: [
    {
      disabled: false,
      href: siteConfig.links.github,
      icon: 'fe:github',
    },
    {
      disabled: false,
      href: siteConfig.links.facebook,
      icon: 'fe:facebook',
    },
    {
      disabled: false,
      href: siteConfig.links.twitter,
      icon: 'fe:twitter',
    },
  ],
  mainNav: [
    {
      disabled: false,
      href: '/',
      title: 'Home',
    },
    {
      disabled: true,
      href: '/',
      title: 'About',
    },
    {
      disabled: true,
      href: '/',
      title: 'Works',
    },
    {
      disabled: true,
      href: '/',
      title: 'Contact',
    },
  ],
};
