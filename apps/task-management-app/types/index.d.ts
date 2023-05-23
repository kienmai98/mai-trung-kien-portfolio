export interface NavItem {
  title?: string;
  href: string;
  disabled?: boolean;
  icon?: string;
}

export type MainNavItem = NavItem;

export interface SidebarConfig {
  sidebar: MainNavItem[];
}

export interface HeaderConfig {
  header: MainNavItem[];
}
