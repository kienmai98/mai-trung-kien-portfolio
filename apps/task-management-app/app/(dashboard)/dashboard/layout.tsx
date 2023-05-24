import Header from '@/task-management-app/components/Header';
import RightSidebar from '@/task-management-app/components/RightSidebar';
import Sidebar from '@/task-management-app/components/Sidebar';
import { headerConfig } from '@/task-management-app/config/header';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex w-screen flex-col bg-white">
      <div className="flex w-full">
        <Sidebar />

        <div className="flex-1 min-h-screen overflow-hidden">
          <Header header={headerConfig.header} />
          <main className="overflow-hidden rounded-3xl bg-slate-100 p-8 h-full">
            {children}
          </main>
        </div>

        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
