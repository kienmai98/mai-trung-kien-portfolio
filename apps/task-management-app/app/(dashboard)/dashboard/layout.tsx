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
      <Header header={headerConfig.header} />
      <div className="flex w-full">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-slate-50 p-8">
          {children}
        </main>

        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
