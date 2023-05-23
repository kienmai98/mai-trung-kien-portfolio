import { MainNav } from '@/web/components/Nav';
import { dashboardConfig } from '@/web/config/dashboard';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container mx-auto flex h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 mt-6 h-16 rounded-xl bg-white shadow-sm">
        <MainNav
          externalItems={dashboardConfig.externalNav}
          items={dashboardConfig.mainNav}
        />
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  );
}
