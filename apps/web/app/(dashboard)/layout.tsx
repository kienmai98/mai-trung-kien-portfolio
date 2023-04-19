import { ExternalNav, MainNav } from '@/web/components/Nav';
import { dashboardConfig } from '@/web/config/dashboard';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-6">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <ExternalNav items={dashboardConfig.externalNav} />
        </div>
      </header>
      <main className="container mx-auto flex flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
