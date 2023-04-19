export interface NavItem {
  title?: string;
  href: string;
  disabled?: boolean;
  icon?: string;
}

export type MainNavItem = NavItem;

export interface DashboardConfig {
  mainNav: MainNavItem[];
  externalNav: MainNavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
    facebook: string;
    twitter: string;
  };
}
